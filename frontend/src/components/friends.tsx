import { useState } from 'react'
import { Button } from 'primereact/button'
import { TabView, TabPanel } from 'primereact/tabview'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'

interface Friend {
  id: number
  name: string
  email: string
  avatar?: string
  online: boolean
  lastSeen?: string
}

interface PendingRequest {
  id: number
  name: string
  email: string
  avatar?: string
  requestedAt: string
}

function Friends() {
  const toast = useRef<Toast>(null)
  
  // Estado: Datos
  const [friendsList, setFriendsList] = useState<Friend[]>([
    { id: 1, name: 'alejanr2', email: 'alejanr2@student.42', avatar: 'https://via.placeholder.com/40?text=AR', online: true, lastSeen: 'Ahora' },
    { id: 2, name: 'Andefern', email: 'andefern@student.42', avatar: 'https://via.placeholder.com/40?text=AF', online: false, lastSeen: 'Hace 2 horas' },
    { id: 3, name: 'fcasaubo', email: 'fcasaubo@student.42', avatar: 'https://via.placeholder.com/40?text=FC', online: true, lastSeen: 'Ahora' },
    { id: 4, name: 'xortega', email: 'xortega@student.42', avatar: 'https://via.placeholder.com/40?text=XO', online: false, lastSeen: 'Hace 5 horas' },
  ])

  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
    { id: 10, name: 'varysito', email: 'varysito@student.42', avatar: 'https://via.placeholder.com/40?text=VY', requestedAt: '2025-04-24' },
    { id: 11, name: 'mgarcia', email: 'mgarcia@student.42', avatar: 'https://via.placeholder.com/40?text=MG', requestedAt: '2025-04-23' },
    { id: 12, name: 'jperez', email: 'jperez@student.42', avatar: 'https://via.placeholder.com/40?text=JP', requestedAt: '2025-04-22' },
    { id: 13, name: 'alopez', email: 'alopez@student.42', avatar: 'https://via.placeholder.com/40?text=AL', requestedAt: '2025-04-21' },
  ])

  // Estado: UI
  const [searchInput, setSearchInput] = useState('')
  const [filteredSearch, setFilteredSearch] = useState<Friend[]>([
    { id: 100, name: 'nuevousuario1', email: 'nuevousuario1@student.42', avatar: 'https://via.placeholder.com/40?text=NU', online: false },
    { id: 101, name: 'testuser', email: 'testuser@student.42', avatar: 'https://via.placeholder.com/40?text=TU', online: true },
  ])

  // Funciones
  const handleSearchFriend = (value: string) => {
    setSearchInput(value)
    if (value.trim().length > 0) {
      // Aquí iría la búsqueda real desde el backend
      const filtered = filteredSearch.filter(u => 
        u.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSearch(filtered)
    } else {
      setFilteredSearch([])
    }
  }

  const handleAddFriend = (friend: Friend) => {
    confirmDialog({
      message: `¿Enviar solicitud de amistad a ${friend.name}?`,
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        setPendingRequests([...pendingRequests, {
          id: friend.id,
          name: friend.name,
          email: friend.email,
          avatar: friend.avatar,
          requestedAt: new Date().toISOString().split('T')[0]
        }])
        setSearchInput('')
        setFilteredSearch([])
        toast.current?.show({ severity: 'success', summary: 'Éxito', detail: `Solicitud enviada a ${friend.name}` })
      }
    })
  }

  const handleAcceptRequest = (request: PendingRequest) => {
    confirmDialog({
      message: `¿Aceptar la solicitud de amistad de ${request.name}?`,
      header: 'Confirmar',
      icon: 'pi pi-check',
      accept: () => {
        setFriendsList([...friendsList, {
          id: request.id,
          name: request.name,
          email: request.email,
          avatar: request.avatar,
          online: false,
          lastSeen: 'Nunca'
        }])
        setPendingRequests(pendingRequests.filter(r => r.id !== request.id))
        toast.current?.show({ severity: 'success', summary: 'Éxito', detail: `${request.name} ha sido añadido como amigo` })
      }
    })
  }

  const handleRejectRequest = (request: PendingRequest) => {
    confirmDialog({
      message: `¿Rechazar la solicitud de ${request.name}?`,
      header: 'Confirmar',
      icon: 'pi pi-times',
      accept: () => {
        setPendingRequests(pendingRequests.filter(r => r.id !== request.id))
        toast.current?.show({ severity: 'info', summary: 'Rechazada', detail: `Solicitud de ${request.name} rechazada` })
      }
    })
  }

  const handleRemoveFriend = (friend: Friend) => {
    confirmDialog({
      message: `¿Eliminar a ${friend.name} de tus amigos?`,
      header: 'Confirmar',
      icon: 'pi pi-times',
      accept: () => {
        setFriendsList(friendsList.filter(f => f.id !== friend.id))
        toast.current?.show({ severity: 'info', summary: 'Eliminado', detail: `${friend.name} ha sido eliminado` })
      }
    })
  }

  return (
    <div className='friends-container'>
      <Toast ref={toast} />
      <ConfirmDialog />
      
      <div className="surface-card border-round-sm p-4">
        <TabView>
          {/* TAB 1: Amigos */}
          <TabPanel header={`Amigos (${friendsList.length})`} >
            {friendsList.length > 0 ? (
              <div className="friends-list">
                {friendsList.map((friend) => (
                  <div key={friend.id} className="friend-card">
                    <div className="friend-info">
                      <div className="friend-avatar">
                        <Avatar image={friend.avatar} label={friend.name[0].toUpperCase()} />
                        <div className={`status-indicator ${friend.online ? 'online' : 'offline'}`}></div>
                      </div>
                      <div className="friend-details">
                        <h4 className="mb-0">{friend.name}</h4>
                        <small className="text-secondary">
                          {friend.online ? <span className="text-success">● Online</span> : <span>Visto: {friend.lastSeen}</span>}
                        </small>
                      </div>
                    </div>
                    <div className="friend-actions">
                      <Button 
                        icon="pi pi-times" 
                        className="p-button-rounded p-button-danger p-button-text p-button-sm"
                        tooltip="Eliminar"
                        onClick={() => handleRemoveFriend(friend)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <i className="pi pi-heart-fill"></i>
                <p>No tienes amigos aún</p>
              </div>
            )}
          </TabPanel>

          {/* TAB 2: Solicitudes pendientes */}
          <TabPanel header={`Solicitudes (${pendingRequests.length})`}>
            {pendingRequests.length > 0 ? (
              <div className="requests-list">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="request-card">
                    <div className="request-info">
                      <Avatar image={request.avatar} label={request.name[0].toUpperCase()} />
                      <div className="request-details">
                        <h4 className="mb-0">{request.name}</h4>
                        <small className="text-secondary">{request.requestedAt}</small>
                      </div>
                    </div>
                    <div className="request-actions">
                      <Button 
                        icon="pi pi-check" 
                        className="p-button-rounded p-button-success p-button-text p-button-sm"
                        tooltip="Aceptar"
                        onClick={() => handleAcceptRequest(request)}
                      />
                      <Button 
                        icon="pi pi-times" 
                        className="p-button-rounded p-button-danger p-button-text p-button-sm"
                        tooltip="Rechazar"
                        onClick={() => handleRejectRequest(request)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <i className="pi pi-inbox"></i>
                <p>Sin solicitudes</p>
              </div>
            )}
          </TabPanel>

          {/* TAB 3: Agregar amigo */}
          <TabPanel header="Agregar">
            <div className="add-friend-tab">
              <div className="search-box mb-3">
                <InputText 
                  placeholder="Introduce el nick del usuario" 
                  value={searchInput}
                  onChange={(e) => handleSearchFriend(e.target.value)}
                  className="w-full"
                />
              </div>
              {filteredSearch.length > 0 && (
                <div className="search-results-inline">
                  {filteredSearch.map((user) => (
                    <div key={user.id} className="search-result-item">
                      <div className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center gap-2">
                          <Avatar image={user.avatar} label={user.name[0].toUpperCase()} />
                          <div>
                            <h4 className="mb-0">{user.name}</h4>
                            <small className="text-secondary">{user.email}</small>
                          </div>
                        </div>
                        <Button 
                          icon="pi pi-plus" 
                          className="p-button-rounded p-button-text p-button-sm"
                          onClick={() => handleAddFriend(user)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {searchInput.trim().length === 0 && (
                <div className="empty-state-search">
                  <i className="pi pi-search"></i>
                  <p>Busca un usuario para enviarle una solicitud</p>
                </div>
              )}
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}

export default Friends
