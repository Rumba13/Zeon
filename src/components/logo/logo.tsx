import "./logo.scss"
import  darkLogo from "../../images/darkLogo.svg"
import whiteLogo from "../../images/whiteLogo.svg"

export type LogoColors = "White" | "Dark";

type PropsType = {
    color?: LogoColors,
}

function getLogo(color: LogoColors):string {
    switch (color) {
        case "Dark":
            return darkLogo
        case "White":
            return whiteLogo
    }
}

export default function Logo({ color = "Dark" }: PropsType) {
    return <div className="logo">
        <img src={getLogo(color)} alt="Zыon" />
    </div>
}