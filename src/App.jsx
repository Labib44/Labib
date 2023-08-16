import { RouterProvider } from 'react-router-dom'
import './App.css'
import routers from './routes/Router/Router'
import { Icon } from '@iconify/react';


function App() {
  

  return (
    <div className=' relative'>
      <RouterProvider router={routers}></RouterProvider>
      <button className=' bg-secondary fixed text-6xl top-96 left-0 p-2 rounded-l rounded-md'><Icon icon="uil:brightness" className='text-white text-2xl'/></button>
      {/* <Icon icon="uil:moon" /> */}
    </div>
  )
}

export default App
