// 1. Imports
import { useState } from 'react'


// 2. Definir tipos (TypeScript)
interface LoginForm {
  username: string
  password: string
}

// 3. El componente (función que retorna JSX)
const Login = () => {
  // Estado local del componente
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' })

  // Handlers (gestores de eventos)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // aquí irá la lógica más adelante
  }

  // 4. El JSX (lo que se renderiza)
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

// 5. Exportar
export default Login