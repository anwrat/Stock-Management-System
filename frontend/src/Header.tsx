import logo from "./assets/asianpaints.png";

export function Headertop(){
    return(
        <header className="card">
            <img src={logo} className='logomain'></img>
            <h1 className='toph'>Gandaki Trade Link</h1>
        </header>
    )
}