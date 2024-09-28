import { Footerdown } from "./Footer"
import { Headertop } from "./Header"

export function ColorInk(){
    return(
        <>
            <Headertop />
            <div className="middle">
                <h1>This is ColorInk Page</h1>
            </div>
            <Footerdown />
        </>
    )
}