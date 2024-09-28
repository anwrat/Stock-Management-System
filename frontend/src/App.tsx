import { useNavigate } from 'react-router-dom';
import './App.css'
import logo from "./assets/asianpaints.png";

function App() {
  const navigate = useNavigate();

  function handleRedirect(page:String) {
    navigate(`${page}`); // Redirect to the '/interior' page
  }

  return (
    <>
      <header className="card">
        <img src={logo} className='logomain'></img>
        <h1 className='toph'>Gandaki Trade Link</h1>
      </header>
      <div className='middle'>
        <h2>Choose a category</h2>
        <button onClick={()=>handleRedirect("/interior")}>Interior Colors</button>
        <p className="read-the-docs">
          Choose a type of color
        </p>
        <button onClick={()=>handleRedirect("/exterior")}>Exterior Colors</button>
        <button onClick={()=>handleRedirect("/enamel")}>Enamel Colors</button>
        <button onClick={()=>handleRedirect("/primer")}>Primers</button>
        <button onClick={()=>handleRedirect("/ink")}>Color Ink</button>
        <button onClick={()=>handleRedirect("/other")}>Other Items</button>
      </div>
      <footer>&copy; Anwesh Rawat</footer>
    </>
  )
}

export default App
