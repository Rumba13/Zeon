import "./styles.scss"
import { Link } from "react-router-dom";
import { LogoColors, getLogoType } from "./getLogoType";

type PropsType = {
    color?: LogoColors,
}

export function Logo({ color = "dark" }: PropsType) { //TODD refuck rename color to variant
    return <div className="logo">
        <Link to="/">
            <img src={getLogoType(color)} alt="Zыon" />
        </Link>
    </div>
}