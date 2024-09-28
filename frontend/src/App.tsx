import { useNavigate } from 'react-router-dom';
import './App.css'
import {Headertop} from './Header.tsx';
import { Footerdown } from './Footer.tsx';


function App() {
  const navigate = useNavigate();

  function handleRedirect(page:String) {
    navigate(`${page}`); // Redirect to the '/interior' page
  }

  return (
    <>
      <Headertop />
      <div className='middle'>
        <h2 className="mainh">Choose a category</h2>
        <button onClick={()=>handleRedirect("/interior")}>Interior Colors</button>
        <button onClick={()=>handleRedirect("/exterior")}>Exterior Colors</button>
        <button onClick={()=>handleRedirect("/enamel")}>Enamel Colors</button>
        <button onClick={()=>handleRedirect("/primer")}>Primers</button>
        <button onClick={()=>handleRedirect("/ink")}>Color Ink</button>
        <button onClick={()=>handleRedirect("/other")}>Other Items</button>
      </div>
      <Footerdown />
    </>
  )
}

export default App
