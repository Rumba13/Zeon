import "./styles.scss"
import { Link } from "react-router-dom";
import { getLogoVariant, LogoVariant } from "./getLogoType";

type PropsType = {
    variant?: LogoVariant,
}

export function Logo({ variant = "dark" }: PropsType) { //TODO refuck rename color to variant
    return <div className="logo">
        <Link to="/">
            <img src={getLogoVariant(variant)} alt="Zыon" />
        </Link>
    </div>
}