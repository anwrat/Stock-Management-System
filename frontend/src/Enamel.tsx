import { Footerdown } from "./Footer";
import { Headertop } from "./Header";

export function Enamel() {
    return (
      <>
        <Headertop />
        <div className="middle">
          <h1>This is the Enamel Page</h1>
        </div>
        <Footerdown />
      </>
    )
  }