import { Footerdown } from "./Footer"
import { Headertop } from "./Header"

export function OtherItems() {
    return(
      <>
        <Headertop />
        <div className="middle">
          <h1>This is the OtherItems Page</h1>
        </div>
        <Footerdown />
      </>
    )
  }