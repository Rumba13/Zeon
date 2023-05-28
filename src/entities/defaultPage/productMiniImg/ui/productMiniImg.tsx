import { Link } from "react-router-dom";
import "./productMiniImg.scss";

type PropsType = {
    img:string,
    href:string
}

export function ProductMiniImg({ img, href}:PropsType) {
    return <Link className="product-mini__preview-image" to={href}>
        <img src={img} alt="" className="preview-image__image" />
    </Link>
}