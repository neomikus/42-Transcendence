import { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

interface Post {
  id: number
  content: string
  date: string
}

function PostFeed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [text, setText] = useState<string>('')

  const handlePost = () => {
    if (!text.trim()) return
    const newPost: Post = {
      id: Date.now(),
      content: text.trim(),
      date: new Date().toLocaleString(),
    }
    setPosts([newPost, ...posts])
    setText('')
  }

  return (
    <div className="surface-card border-round-sm p-3">
      <h3 className="mt-0 mb-3">Publicar</h3>
      <InputTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="¿Qué quieres compartir?"
        className="w-full mb-2"
        autoResize
      />
      <div className="flex justify-content-end mb-4">
        <Button label="Publicar" icon="pi pi-send" onClick={handlePost} disabled={!text.trim()} />
      </div>
      <div className="flex flex-column gap-3">
        {posts.length === 0 && (
          <p className="text-color-secondary text-center">Aún no hay publicaciones.</p>
        )}
        {posts.map((post) => (
          <Card key={post.id} className="w-full">
            <p className="m-0 mb-2">{post.content}</p>
            <small className="text-color-secondary">{post.date}</small>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PostFeed
