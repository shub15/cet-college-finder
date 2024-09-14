import { Outlet } from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import SearchCollege from './components/SearchCollege'
import { NotificationProvider } from './components/NotificationContext'

function App() {
  return (
    <NotificationProvider>
      <Navbar
      // user="Shubham"
      />
      {/* <Body /> */}
      {/* <form action="http://127.0.0.1:8080/api" method="get">
        <Form />
        </form> */}
      <Outlet />
      {/* <Colleges /> */}
      <Footer />
    </NotificationProvider>
  )
}

export default App
