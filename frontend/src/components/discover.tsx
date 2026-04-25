import { Badge } from 'primereact/badge'

interface Discover {
  id: number
  name: string
  online: boolean
}

const discover: Discover[] = [
  { id: 1, name: 'alejanr2', online: true },
  { id: 2, name: 'Andefern', online: false },
  { id: 3, name: 'fcasaubo', online: true },
  { id: 4, name: 'xortega', online: false },
  { id: 5, name: 'varysito', online: true },
]

function Discover() {
  return (
    <div className='discover-container'>
      <div className="surface-card border-round-sm p-3">
        <h3 className="mt-0 mb-3">Descubre</h3>
        <ul className="list-none p-0 m-0">
          {discover.map((user) => (
            <li key={user.id} className="flex align-items-center gap-2 mb-3">
              <span className="flex-1">{user.name}</span>
              <Badge
                value={user.online ? 'Online' : 'Offline'}
                severity={user.online ? 'success' : 'secondary'}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Discover
