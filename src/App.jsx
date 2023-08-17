import { RouterProvider } from 'react-router-dom'
import './App.css'
import routers from './routes/Router/Router'
import { Icon } from '@iconify/react';
import { useTheme } from './context/ThemeProvider/ThemeProvider';


function App() {
  const { isDark, setIsDark } = useTheme();
  

  return (
    <div className=' relative'>
      <RouterProvider router={routers}></RouterProvider>
      <button 
      onClick={() => setIsDark(!isDark)}
      className=' bg-secondary fixed text-6xl top-96 left-0 p-2 rounded-l rounded-md'>
        
        {
          isDark ? (<Icon icon="uil:brightness" className='text-white text-2xl'/>) 
          : 
          (<Icon icon="uil:moon" className='text-white text-2xl'/>)
        }
        </button>
      
    </div>
  )
}

export default App
