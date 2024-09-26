import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { NotificationProvider } from './components/NotificationContext'
import { AuthProvider } from './components/AuthContext'

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Navbar
        // user="Shubham"
        />
        <Outlet />
        <Footer />
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
