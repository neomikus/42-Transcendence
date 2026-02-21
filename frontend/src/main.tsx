import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'primereact/resources/themes/lara-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/index.css'
//import App from './App.tsx'
import Login from './pages/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Login />
  </Provider>
)
