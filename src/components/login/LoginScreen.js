import { useNavigate } from "react-router-dom"

const LoginScreen = () => {

    const navigate = useNavigate()

    const handleLogin = () => {

        navigate('/marvel', {
            replace: true
        })

    }

    return (
        <div className='container p-4'>
            <h2>Login</h2>

            <button className='btn btn-primary'
            onClick={handleLogin}
            >
                
                Login
            </button>
        </div>
    )
}

export default LoginScreen
