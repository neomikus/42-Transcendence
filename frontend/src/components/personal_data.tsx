import { Divider } from 'primereact/divider'
import { Avatar } from 'primereact/avatar'
import { useAppSelector } from '../store/hooks'

function PersonalData() {
  const { user } = useAppSelector((state) => state.auth)

  if (!user) {
    return null
  }

  // Obtener iniciales del usuario
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className='personal_data-container'>
      <div className="surface-card border-round-sm p-4 flex flex-column align-items-center gap-3">
        {user.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Foto de perfil"
            style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover' }}
            onError={(e) => {
              // Si la imagen falla al cargar, mostrar avatar con iniciales
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <Avatar
            label={getInitials(user.full_name || user.username)}
            size="xlarge"
            shape="circle"
            style={{ width: '140px', height: '140px', fontSize: '3rem', backgroundColor: '#2196F3', color: 'white' }}
          />
        )}
        <div className="text-center">
          <p className="font-bold text-xl m-0">{user.full_name}</p>
          <p className="text-color-secondary m-0">@{user.username}</p>
        </div>
        <Divider className="my-1" />
        <div className="w-full flex flex-column gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-user text-color-secondary" />
            <span className="text-sm">{user.full_name}</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-at text-color-secondary" />
            <span className="text-sm">{user.username}</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-envelope text-color-secondary" />
            <span className="text-sm">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalData
