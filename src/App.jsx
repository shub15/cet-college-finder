import Body from './components/Body'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import SearchCollege from './components/SearchCollege'

function App() {

  return (
    <>
      <Navbar user="Shubham" />
      <Body />
      {/* <form action="http://127.0.0.1:8080/api" method="get">
        <Form />
      </form> */}
      <SearchCollege />
      <Footer />
    </>
  )
}

export default App
