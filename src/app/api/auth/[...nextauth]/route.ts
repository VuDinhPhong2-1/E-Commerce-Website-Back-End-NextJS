import { sendRequest } from "@/utils/api";
import NextAuth, { AuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github"
const authOptions: AuthOptions = {
    secret: process.env.NO_SECRET,
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        // ...add more providers here
    ],//Custom Session
    callbacks: {
        async jwt({ token, account, profile, trigger, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (trigger === "signIn" && account?.provider === "github") {
                const res = await sendRequest<IBackendRes<JWT>>({
                    url: "http://localhost:8001/api/v1/auth/login",
                    method: "POST",
                    body: { type: account.provider, email: user.email, name: user.name, avatar: user.image }
                });
                console.log("user", user);
                console.log("token", token);

                if (res.data) {
                    token.access_token = res.data?.access_token;
                    token.refresh_token = res.data?.refresh_token;
                    token.user = res.data?.user;
                }
            }
            return token;
        },
        async session({ session, token, user, trigger }) {
            // Send properties to the client, like an access_token and user id from a provider.
            if (token) {
                session.access_token = token.access_token;
                session.refresh_token = token.refresh_token;
                session.user = token.user;
                session.user.image = token.picture!;
            }
            console.log("session", session);
            return session
        }
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }