import { Divider } from 'primereact/divider'
import avatarImg from '../img/alejanr2.jpeg'

interface UserProfile {
  fullName: string
  username: string
  email: string
}

const user: UserProfile = {
  fullName: 'Alejandro Rodriguez Diaz',
  username: 'alejanr2',
  email: 'alejanr2@student.42urduliz.com',
}

function PersonalData() {
  return (
    <div className="surface-card border-round-sm p-4 flex flex-column align-items-center gap-3">
      <img
        src={avatarImg}
        alt="Foto de perfil"
        style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <div className="text-center">
        <p className="font-bold text-xl m-0">{user.fullName}</p>
        <p className="text-color-secondary m-0">@{user.username}</p>
      </div>
      <Divider className="my-1" />
      <div className="w-full flex flex-column gap-2">
        <div className="flex align-items-center gap-2">
          <i className="pi pi-user text-color-secondary" />
          <span className="text-sm">{user.fullName}</span>
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
  )
}

export default PersonalData
