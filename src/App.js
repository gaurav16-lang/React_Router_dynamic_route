import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { Products } from './components/Products'
import Contactus from './components/Contactus'
import { Users } from './components/Users'

import { UsersDetails } from './components/UserDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:usersid" element={<UsersDetails />}></Route>

        <Route path="/products/:id" element={<Products />}></Route>
      </Routes>
    </div>
  )
}

export default App
