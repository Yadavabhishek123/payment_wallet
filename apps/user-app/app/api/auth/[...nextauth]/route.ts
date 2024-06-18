import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }// all get and posst request that are come from frontend handle by this handler function