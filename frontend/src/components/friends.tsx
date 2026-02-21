import { Badge } from 'primereact/badge'

interface Friend {
  id: number
  name: string
  online: boolean
}

const friends: Friend[] = [
  { id: 1, name: 'alejanr2', online: true },
  { id: 2, name: 'Andefern', online: false },
  { id: 3, name: 'fcasaubo', online: true },
  { id: 4, name: 'xortega', online: false },
  { id: 5, name: 'varysito', online: true },
]

function Friends() {
  return (
    <div className="border-round-sm p-3 surface-card">
      <h3 className="mt-0 mb-3">Amigos</h3>
      <ul className="list-none p-0 m-0">
        {friends.map((friend) => (
          <li key={friend.id} className="flex align-items-center gap-2 mb-3">
            <span className="flex-1">{friend.name}</span>
            <Badge
              value={friend.online ? 'Online' : 'Offline'}
              severity={friend.online ? 'success' : 'secondary'}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Friends
