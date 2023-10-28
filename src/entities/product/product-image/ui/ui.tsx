import "./styles.scss";
import {Link} from "react-router-dom";

type PropsType = {
    img: string,
    href: string
}

const defaultImage = "https://www.nevworker.ru/upload/iblock/2e2/2e20450d699ee24d46f7e1b1848fa47f.jpg";
const defaultHref = "/product-details-card/1";

export function ProductImage({img = defaultImage, href = defaultHref}: PropsType) {
    return <Link className="product-image" to={href}>
        <img src={img} alt="" className="product-image__image"/>
    </Link>
}