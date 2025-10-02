"use client"

import React, { useEffect, useState, useCallback } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { shops } from '@/lib/data';
import { toast } from "sonner"
import { QrScannerButton } from '@/components/QrScannerButton';


interface StampData {
  shopId: string;
  visitDate: string;
  isCollected: boolean;
  qrCodeUsed: string;
}

interface UserProgress {
  stamps: StampData[];
  level: number;
  totalVisits: number;
  badges: string[];
  userId: string;
  userName: string;
  createdAt: string;
}

// 店舗ごとのQRコード（実際の運用では店舗固有の複雑なコードを使用）
const SHOP_QR_CODES: Record<string, string> = {
  '1': 'TACOS-NAHA-2024-A1B2C3',      // タコス・デ・オキナワ
  '2': 'SHISA-YOMITAN-2024-D4E5F6',   // シーサータコス  
  '3': 'BEACH-NAGO-2024-G7H8I9'       // ビーチサイドタコス
};

const InteractiveStampCard = () => {
  const { data: session, status } = useSession()
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'card' | 'progress' | 'badges'>('card');
  const [showCollectAnimation, setShowCollectAnimation] = useState<string | null>(null);
  const [qrInput, setQrInput] = useState('');
  const [qrError, setQrError] = useState('');

  const fetchUserProgress = useCallback(async () => {
    if (status !== 'authenticated') {
      setIsLoading(false)
      return
    }
    try {
      setIsLoading(true)
      const response = await fetch('/api/stampcard/progress')
      if (response.ok) {
        const data = await response.json()
        setUserProgress(data)
      } else {
        console.error('Failed to fetch user progress')
        setUserProgress(null)
      }
    } catch (error) {
      console.error('Error fetching user progress:', error)
      setUserProgress(null)
    } finally {
      setIsLoading(false)
    }
  }, [status])

  useEffect(() => {
    fetchUserProgress()
  }, [fetchUserProgress])

  // QRコードでスタンプ獲得
  const collectStampWithQR = async (qrCode: string) => {
    setQrError('');
    try {
      const response = await fetch('/api/stampcard/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qrCode }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        const shopId = Object.keys(SHOP_QR_CODES).find((id) => SHOP_QR_CODES[id] === qrCode)
        if (shopId) {
          setShowCollectAnimation(shopId)
          setTimeout(() => setShowCollectAnimation(null), 1500)
        }
        setQrInput('')
        await fetchUserProgress() // データを再取得してUIを更新
      } else {
        const errorMessage = result.message || 'スタンプの獲得に失敗しました。'
        setQrError(errorMessage)
        toast.error(errorMessage)
      }
    } catch (error) {
      setQrError('通信エラーが発生しました。')
      toast.error('通信エラーが発生しました。')
    }
  }

  // 手動QRコード入力
  const handleQrSubmit = () => {
    if (!qrInput.trim()) {
      setQrError('QRコードを入力してください。')
      return;
    }
    collectStampWithQR(qrInput.trim().toUpperCase());
  };

  // QRコード生成（店舗用）
  const generateQRCodeUrl = (shopId: string) => {
    const qrCode = SHOP_QR_CODES[shopId];
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCode)}`;
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>読み込み中...</p>
      </div>
    );
  }

  if (status !== 'authenticated' || !userProgress) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>ログインしてください。</p>
      </div>
    );
  }

  const progressPercentage = (userProgress.totalVisits / shops.length) * 100;
  const stampsToNextLevel = shops.length - userProgress.totalVisits;

  const getUserTitle = (level: number) => {
    if (level === 1) return 'タコス初心者';
    if (level === 2) return 'タコス好き';
    if (level === 3) return 'タコス通';
    if (level >= 4) return 'タコスマスター';
    return 'タコス探求者';
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 pb-24">
      {/* タブナビゲーション */}
      <div className="flex space-x-1 bg-secondary/30 rounded-lg p-1">
        <Button
          variant={selectedTab === 'card' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setSelectedTab('card')}
          className="flex-1 text-xs"
        >
          🌮 カード
        </Button>
        <Button
          variant={selectedTab === 'progress' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setSelectedTab('progress')}
          className="flex-1 text-xs"
        >
          📊 進捗
        </Button>
        <Button
          variant={selectedTab === 'badges' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setSelectedTab('badges')}
          className="flex-1 text-xs"
        >
          🏆 バッジ
        </Button>
      </div>

      {/* ユーザー情報サマリー */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/5 border-primary/20">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">🌮</div>
          <CardTitle className="text-2xl">{getUserTitle(userProgress.level)}</CardTitle>
          <p className="text-muted-foreground">レベル {userProgress.level}</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center space-x-6 text-sm">
            <div>
              <div className="font-bold text-lg text-primary">{userProgress.totalVisits}</div>
              <div className="text-muted-foreground">訪問店舗</div>
            </div>
            <div>
              <div className="font-bold text-lg text-primary">{userProgress.badges.length}</div>
              <div className="text-muted-foreground">獲得バッジ</div>
            </div>
            <div>
              <div className="font-bold text-lg text-primary">{Math.round(progressPercentage)}%</div>
              <div className="text-muted-foreground">達成率</div>
            </div>
          </div>
          
          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          {stampsToNextLevel > 0 && (
            <p className="text-sm text-muted-foreground">
              次のレベルまであと {stampsToNextLevel} 店舗！
            </p>
          )}
        </CardContent>
      </Card>

      {/* スタンプカードタブ */}
      {selectedTab === 'card' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎯 スタンプ収集状況
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shops.map(shop => {
                const stampData = userProgress.stamps.find(s => s.shopId === shop.id);
                const isCollected = stampData?.isCollected || false;
                const isAnimating = showCollectAnimation === shop.id;
                
                return (
                  <div
                    key={shop.id}
                    className={`relative p-4 border-2 rounded-lg transition-all duration-300 ${
                      isCollected
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-dashed border-muted-foreground/30'
                    } ${isAnimating ? 'animate-pulse scale-105' : ''}`}
                  >
                    <div className="text-center space-y-2">
                      <div className="text-3xl">
                        {isCollected ? '🌮' : '❔'}
                      </div>
                      <h4 className="font-semibold text-sm">{shop.name}</h4>
                      
                      {isCollected ? (
                        <div className="space-y-1">
                          <Badge variant="default" className="text-xs">
                            ✅ 訪問済み
                          </Badge>
                          <p className="text-xs text-muted-foreground">
                            {stampData?.visitDate}
                          </p>
                          <p className="text-xs text-muted-foreground font-mono">
                            QR: {stampData?.qrCodeUsed?.slice(-6)}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground">未訪問</p>
                          <p className="text-xs text-muted-foreground">
                            店舗でQRコードをスキャン
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {isAnimating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
                        <div className="text-4xl animate-bounce">🎉</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 進捗タブ */}
      {selectedTab === 'progress' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📈 詳細進捗
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {shops.map(shop => {
              const stampData = userProgress.stamps.find(s => s.shopId === shop.id);
              const isCollected = stampData?.isCollected || false;
              
              return (
                <div key={shop.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {isCollected ? '✅' : '⏳'}
                    </div>
                    <div>
                      <p className="font-medium">{shop.name}</p>
                      <p className="text-sm text-muted-foreground">{shop.location.address}</p>
                      {isCollected && stampData?.qrCodeUsed && (
                        <p className="text-xs text-muted-foreground font-mono">
                          QR認証済み: {stampData.qrCodeUsed}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    {isCollected ? (
                      <div>
                        <Badge variant="default">QR認証完了</Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {stampData?.visitDate}
                        </p>
                      </div>
                    ) : (
                      <Badge variant="outline">QR未スキャン</Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* バッジタブ */}
      {selectedTab === 'badges' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🏆 獲得バッジ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'first-visit', name: '初回訪問', icon: '🌟', description: '初めてのQRスキャン' },
                { id: 'taco-lover', name: 'タコス通', icon: '🌮', description: '2店舗でQR認証' },
                { id: 'okinawa-master', name: '沖縄マスター', icon: '🏝️', description: '全店舗QR制覇' },
                { id: 'qr-master', name: 'QRマスター', icon: '📱', description: 'QRコード達人' }
              ].map(badge => {
                const isEarned = userProgress.badges.includes(badge.name);
                
                return (
                  <div
                    key={badge.id}
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      isEarned
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-dashed border-muted-foreground/30 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h4 className="font-semibold">{badge.name}</h4>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                    {isEarned && (
                      <Badge variant="default" className="mt-2">
                        獲得済み
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* コンプリート記念 */}
      {userProgress.totalVisits === shops.length && (
        <Card className="bg-gradient-to-r from-primary/20 to-accent/10 border-primary">
          <CardContent className="text-center py-8 space-y-4">
            <div className="text-6xl">🎉</div>
            <h3 className="text-2xl font-bold text-primary">QRコンプリート！</h3>
            <p className="text-lg">{userProgress.userName}さん</p>
            <p className="text-lg">すべてのQRコードをスキャンしました！</p>
            <p className="text-muted-foreground">
              沖縄タコススタンプラリー完全制覇！
            </p>
            <div className="space-y-2">
              <Button size="lg" className="w-full">
                🏆 コンプリート証明書をダウンロード
              </Button>
              <p className="text-xs text-muted-foreground">
                認証ID: {userProgress.userId}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* フローティングQRスキャンボタン */}
      <div className="fixed bottom-17 left-10 z-50">
        <div className="transform scale-200">
          <QrScannerButton onScanSuccess={collectStampWithQR} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveStampCard;