import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { setUser, setLoading } from '../store/authSlice'
import { authAPI } from '../services/authAPI'
import { ProgressSpinner } from 'primereact/progressspinner'

function Callback() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Obtener el usuario autenticado del backend
        const user = await authAPI.getCurrentUser()
        
        if (user) {
          dispatch(setUser(user))
          navigate('/')
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.error('Error en callback:', error)
        navigate('/login')
      } finally {
        dispatch(setLoading(false))
      }
    }

    handleCallback()
  }, [dispatch, navigate])

  return (
    <div className="flex align-items-center justify-content-center min-h-screen">
      <div className="text-center">
        <ProgressSpinner />
        <p className="mt-3 text-color-secondary">Iniciando sesión...</p>
      </div>
    </div>
  )
}

export default Callback
