import { Footerdown } from "./Footer"
import { Headertop } from "./Header"

export function Primer() {
    return(
      <>
        <Headertop />
        <div className="middle">
          <h1>This is the Primer Page</h1>
        </div>
        <Footerdown />
      </>
    )
  }