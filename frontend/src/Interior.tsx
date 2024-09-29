import { Footerdown } from "./Footer"
import { Headertop } from "./Header"
import './dropdown.css'

export function Interior() {
  return(
    <>
      <Headertop />
      <div className="middle">
        <h1>This is the Interior Page</h1>
        <div className="dropdown">
          <button className="dropbtn">Choose a item</button>
          <div className="dropdown-content">
            <p>Royale Bling 20ltr</p>
            <p>Royale Bling</p>
          </div>
        </div>
      </div>
      <Footerdown />
    </>
  )
}