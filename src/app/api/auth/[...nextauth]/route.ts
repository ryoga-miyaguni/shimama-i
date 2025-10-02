import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    // セッションにユーザーIDを含める
    session: ({ session, user }) => {
      session.user.id = user.id
      return session
    },
  },
  events: {
    // 新規ユーザー作成時にプロフィールも作成する
    createUser: async ({ user }) => {
      if (user.id) {
        await prisma.profile.create({ data: { userId: user.id } })
      }
    },
  },
  secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
