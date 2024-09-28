import { Footerdown } from "./Footer";
import { Headertop } from "./Header";

export function Exterior() {
    return(
      <>
        <Headertop />
        <div className="middle">
          <h1>This is the Exterior Page</h1>
        </div>
        <Footerdown />
      </>
    ) 
  }