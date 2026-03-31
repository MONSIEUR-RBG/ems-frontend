import ListEmployee from './components/ListEmployee'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import EmployeeComponent from './components/EmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />} >

          </Route>
          <Route path='/employees' element={<ListEmployee />} >  </Route>
          <Route path='/add-employee' element={<EmployeeComponent />} >  </Route>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
