import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/Perfil.css'
import Perfil from './pages/Perfil.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Perfil />
  </Provider>
)
