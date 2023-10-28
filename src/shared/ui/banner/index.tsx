import {BannerType} from "../../api/types/banner-type";
import "./styles.scss";

type PropsType = {
    banner: BannerType
}

export function Banner({banner}: PropsType) {
    return <a href={banner.href} className="banner">
        <img src={banner.img} alt=""/>
    </a>
}