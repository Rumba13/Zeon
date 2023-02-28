import "./logo.scss"
import { Link } from "react-router-dom";
import { ICONS } from "../../images/images";
export type LogoColors = "White" | "Dark";

type PropsType = {
    color?: LogoColors,
}

function getLogo(color: LogoColors): string {
    switch (color) {
        case "Dark":
            return ICONS.darkLogo
        case "White":
            return ICONS.whiteLogo
    }
}

export default function Logo({ color = "Dark" }: PropsType) {
    return <div className="logo">
        <Link to="/">
            <img src={getLogo(color)} alt="Zыon" />
        </Link>
    </div>
}