import LoginForm from '@/components/form/login'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

async function LoginPage() {
    const session = await auth()
    if (session) redirect("/dashboard")
    else {
        return (
            <div className='container'>
                <LoginForm />
            </div>
        )
    }


}

export default LoginPage