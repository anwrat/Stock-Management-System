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
      <div className="card">
      <img src={logo} className='logomain'></img>
      <h1>Gandaki Trade Link</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={()=>handleRedirect("/interior")}>Interior Colors</button>
      <p className="read-the-docs">
        Choose a type of color
      </p>
      <button onClick={()=>handleRedirect("/exterior")}>Exterior Colors</button>
      <button onClick={()=>handleRedirect("/enamel")}>Enamel Colors</button>
      <button onClick={()=>handleRedirect("/primer")}>Primers</button>
      <button onClick={()=>handleRedirect("/ink")}>Color Ink</button>
      <button onClick={()=>handleRedirect("/other")}>Other Items</button>
    </>
  )
}

export default App
