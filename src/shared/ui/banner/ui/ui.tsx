import "./styles.scss";
import { BannerDto } from "../../../../pages/defaultPage/libs/dtos";

type PropsType = {
    banner:BannerDto
}

export function Banner({ banner}: PropsType) {
    return <a href={banner.href} className="banner">
        <img src={banner.img} alt="" />
    </a>
}