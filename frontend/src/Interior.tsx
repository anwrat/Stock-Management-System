import { Footerdown } from "./Footer"
import { Headertop } from "./Header"

export function Interior() {
  return(
    <>
      <Headertop />
      <div className="middle">
        <h1>This is the Interior Page</h1>
      </div>
      <Footerdown />
    </>
  )
}