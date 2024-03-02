import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthSignIn from "@/components/auth/auth.signin"
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
const SignInPage = async () => {
    const session = await getServerSession(authOptions);
    if(session){
        // Đã đăng nhập chuyển hướng tới homePage
        redirect("/")
    }
    return (
        <AuthSignIn></AuthSignIn>
    )
}
export default SignInPage;