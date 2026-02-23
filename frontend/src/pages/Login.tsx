import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'

function Login() {
  return (
    <div className="flex align-items-center justify-content-center min-h-screen bg-primary">
      <div className="w-full px-3 md:px-0 md:w-30rem">
        <Card className="shadow-8">
          <div className="text-center mb-5">
            <h1 className="text-900 text-4xl font-semibold mb-2">Iniciar Sesión</h1>
          </div>

          <div className="flex flex-column gap-4">
            <div className="flex flex-column gap-2">
              <label htmlFor="username" className="font-semibold">
                Usuario
              </label>
              <InputText
                id="username"
                placeholder="Introduce tu usuario"
                className="w-full"
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="password" className="font-semibold">
                Contraseña
              </label>
              <Password
                id="password"
                placeholder="Introduce tu contraseña"
                className="w-full"
                inputClassName="w-full"
                feedback={false}
                toggleMask
              />
            </div>

            <Button
              label="Iniciar Sesión"
              icon="pi pi-sign-in"
              className="w-full mt-2"
              size="large"
            />

            <Divider align="center">
              <span className="text-600 font-normal text-sm">o</span>
            </Divider>

            <Button
              label="Iniciar con OAuth2"
              icon="pi pi-google"
              className="w-full"
              severity="secondary"
              outlined
              size="large"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login
