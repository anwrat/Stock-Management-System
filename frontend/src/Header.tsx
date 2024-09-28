import { useNavigate } from 'react-router-dom';
import logo from "./assets/asianpaints.png";

export function Headertop(){
    const navigate = useNavigate();

    function handleRedirect(page:String) {
      navigate(`${page}`); // Redirect to the '/interior' page
    }
    return(
        <>
            <header className="card">
                <button onClick={()=>handleRedirect('/')}>
                    <i className="fa fa-home"></i> 
                </button>  
                <img src={logo} className='logomain'></img>
                <h1 className='toph'>Gandaki Trade Link</h1>
            </header>     
        </>
    )
}