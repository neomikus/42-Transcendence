import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { authAPI } from '../services/authAPI'

function Login() {
  const handleOAuthLogin = () => {
    authAPI.initiateLogin();
  };

  return (
    <div className='container-login'>
      <div className="flex align-items-center justify-content-center min-h-screen bg-primary">
        <div className="w-full px-3 md:px-0 md:w-30rem">
          <Card className="shadow-8">
            <div className="text-center mb-5">
              <h1 className="text-4xl font-semibold mb-2">Transcendence</h1>
            </div>

            <div className="flex flex-column gap-4">
              <Button
                label="SIGN IN WITH 42"
                className="w-full"
                size="large"
                onClick={handleOAuthLogin}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
