import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { NotificationProvider } from './components/NotificationContext'
import { AuthProvider } from './components/AuthContext'
import { DarkModeProvider } from './components/DarkModeContext'
import ThemeProvider from './components/ThemeContext'

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <DarkModeProvider>
          <ThemeProvider>
          <Navbar
          // user="Shubham"
          />
          <Outlet />
          <Footer />
          </ThemeProvider>
        </DarkModeProvider>
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
