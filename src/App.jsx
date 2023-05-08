import './App.css'
import About from './components/About'
import Contacto from './components/Contacto';
import { Info } from './components/Info';

function App() {
  return (
    <div>
      <Contacto/>
    <About 
      name='Javier Lopez Aliste'
      username='@JavierLopezA99'
    />
    <Info/>
    </div>
    
 
  )
}

export default App
