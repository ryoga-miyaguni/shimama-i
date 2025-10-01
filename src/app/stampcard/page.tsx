"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { shops } from '@/lib/data';
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
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'card' | 'progress' | 'badges' | 'qr'>('card');
  const [showCollectAnimation, setShowCollectAnimation] = useState<string | null>(null);
  const [registrationData, setRegistrationData] = useState({ name: '', phone: '' });
  const [qrInput, setQrInput] = useState('');
  const [qrError, setQrError] = useState('');

  useEffect(() => {
    const savedProgress = localStorage.getItem('okinawa-tacos-progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      // userProgressが現在の状態と異なる場合のみ更新
      if (JSON.stringify(progress) !== JSON.stringify(userProgress)) {
      setUserProgress(progress);
      setIsRegistered(true);
    }
    }
  }, [userProgress]);

  const saveProgress = (progress: UserProgress) => {
    localStorage.setItem('okinawa-tacos-progress', JSON.stringify(progress));
  };

  const registerUser = () => {
    if (!registrationData.name || !registrationData.phone) {
      alert('お名前と電話番号を入力してください');
      return;
    }

    const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const initialProgress: UserProgress = {
      stamps: shops.map(shop => ({
        shopId: shop.id,
        visitDate: '',
        isCollected: false,
        qrCodeUsed: ''
      })),
      level: 1,
      totalVisits: 0,
      badges: [],
      userId: newUserId,
      userName: registrationData.name,
      createdAt: new Date().toISOString()
    };

    setUserProgress(initialProgress);
    setIsRegistered(true);
    saveProgress(initialProgress);
  };

  const resetProgress = () => {
    if (confirm('すべての進捗がリセットされます。本当によろしいですか？')) {
      localStorage.removeItem('okinawa-tacos-progress');
      setUserProgress(null);
      setIsRegistered(false);
      setRegistrationData({ name: '', phone: '' });
    }
  };

  // QRコードでスタンプ獲得
  const collectStampWithQR = (qrCode: string) => {
    if (!userProgress) return;

    setQrError('');
    
    // QRコードの検証
    const shopId = Object.keys(SHOP_QR_CODES).find(id => SHOP_QR_CODES[id] === qrCode);
    
    if (!shopId) {
      setQrError('無効なQRコードです。正しい店舗のQRコードをスキャンしてください。');
      return;
    }

    // 既に獲得済みかチェック
    const existingStamp = userProgress.stamps.find(s => s.shopId === shopId);
    if (existingStamp?.isCollected) {
      setQrError('この店舗のスタンプは既に獲得済みです。');
      return;
    }

    // スタンプ獲得処理
    setUserProgress(prev => {
      if (!prev) return null;
      
      const newStamps = prev.stamps.map(stamp => 
        stamp.shopId === shopId
          ? { 
              ...stamp, 
              isCollected: true, 
              visitDate: new Date().toLocaleDateString('ja-JP'),
              qrCodeUsed: qrCode
            }
          : stamp
      );
      
      const collectedCount = newStamps.filter(s => s.isCollected).length;
      const newLevel = Math.floor(collectedCount / 1) + 1;
      const newBadges = [...prev.badges];

      // バッジの獲得チェック
      if (collectedCount === 1 && !newBadges.includes('初回訪問')) {
        newBadges.push('初回訪問');
      }
      if (collectedCount === 2 && !newBadges.includes('タコス通')) {
        newBadges.push('タコス通');
      }
      if (collectedCount === 3 && !newBadges.includes('沖縄マスター')) {
        newBadges.push('沖縄マスター');
      }

      const updatedProgress = {
        ...prev,
        stamps: newStamps,
        level: newLevel,
        totalVisits: collectedCount,
        badges: newBadges
      };

      saveProgress(updatedProgress);
      return updatedProgress;
    });

    setShowCollectAnimation(shopId);
    setQrInput('');
    setTimeout(() => setShowCollectAnimation(null), 1500);
    
    const shop = shops.find(s => s.id === shopId);
    alert(`🎉 ${shop?.name} のスタンプを獲得しました！`);
  };

  // 手動QRコード入力
  const handleQrSubmit = () => {
    if (!qrInput.trim()) {
      setQrError('QRコードを入力してください。');
      return;
    }
    collectStampWithQR(qrInput.trim().toUpperCase());
  };

  // QRコード生成（店舗用）
  const generateQRCodeUrl = (shopId: string) => {
    const qrCode = SHOP_QR_CODES[shopId];
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCode)}`;
  };

  if (!isRegistered) {
    return (
      <div className="max-w-md mx-auto p-4">
        <Card>
          <CardHeader className="text-center">
            <div className="text-4xl mb-4">🌮</div>
            <CardTitle className="text-2xl">スタンプラリー参加登録</CardTitle>
            <p className="text-muted-foreground">
              QRコードでスタンプを集めよう！
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">お名前 *</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="山田 太郎"
                value={registrationData.name}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">電話番号 *</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="090-1234-5678"
                value={registrationData.phone}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div className="bg-primary/10 p-4 rounded-lg text-sm">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                📱 使い方
              </h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• 参加店舗でタコスを注文</li>
                <li>• 店舗のQRコードをスキャン</li>
                <li>• スタンプを自動獲得</li>
                <li>• 全店制覇で素敵な景品！</li>
              </ul>
            </div>

            <Button onClick={registerUser} className="w-full">
              🎯 スタンプラリーを始める
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!userProgress) return null;

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
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* ユーザー情報 */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">参加者</p>
          <p className="font-semibold">{userProgress.userName}</p>
        </div>
        <Button variant="outline" size="sm" onClick={resetProgress}>
          🔄 リセット
        </Button>
      </div>

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
          variant={selectedTab === 'qr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setSelectedTab('qr')}
          className="flex-1 text-xs"
        >
          📱 QRスキャン
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

      {/* QRスキャンタブ */}
      {selectedTab === 'qr' && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                📱 QRコードでスタンプ獲得
              </CardTitle>
              <QrScannerButton onScanSuccess={collectStampWithQR} />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* QRコード入力セクション */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-6xl mb-4">📷</div>
                <p className="text-muted-foreground">
                  店舗のQRコードをスキャンまたは<br/>
                  手動でコードを入力してください
                </p>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="QRコードを入力（例: TACOS-NAHA-2024-A1B2C3）"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                  value={qrInput}
                  onChange={(e) => {
                    setQrInput(e.target.value.toUpperCase());
                    setQrError('');
                  }}
                />
                
                <Button onClick={handleQrSubmit} className="w-full" disabled={!qrInput.trim()}>
                  🎯 スタンプ獲得
                </Button>

                {qrError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {qrError}
                  </div>
                )}
              </div>
            </div>

            {/* テスト用QRコード表示（開発時のみ） */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-4 text-center">📋 テスト用QRコード</h4>
              <div className="grid grid-cols-1 gap-4">
                {shops.map(shop => (
                  <div key={shop.id} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={generateQRCodeUrl(shop.id)} 
                          alt={`${shop.name} QRコード`}
                          className="w-16 h-16 border rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">{shop.name}</h5>
                        <p className="text-sm text-muted-foreground font-mono">
                          {SHOP_QR_CODES[shop.id]}
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setQrInput(SHOP_QR_CODES[shop.id])}
                          className="mt-2"
                        >
                          コードをコピー
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                ※ 実際の運用では店舗にのみQRコードを設置します
              </p>
            </div>
          </CardContent>
        </Card>
      )}

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
    </div>
  );
};

export default InteractiveStampCard;