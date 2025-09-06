import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Kids from './pages/Kids/Kids';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/kids' element={<Kids />} />
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
    </Routes>
   
  )
}

export default App
