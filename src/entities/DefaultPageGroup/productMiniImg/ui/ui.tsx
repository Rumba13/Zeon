import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = {
    img: string,
    href: string
}

export function ProductMiniImg({ img, href }: PropsType) {
    return <Link className="product-image" to={href}>
        <img src={img} alt="" className="product-image__image" />
    </Link>
}