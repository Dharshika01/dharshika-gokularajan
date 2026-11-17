import{ useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound'
import {Toaster} from "sonner";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster position ="top-right"/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>

        <Route path ="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
