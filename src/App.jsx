import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { NotificationProvider } from './components/NotificationContext'
import { AuthProvider } from './components/AuthContext'
import { DarkModeProvider } from './components/DarkModeContext'

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <DarkModeProvider>
          <Navbar
          // user="Shubham"
          />
          <Outlet />
          <Footer />
        </DarkModeProvider>
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
