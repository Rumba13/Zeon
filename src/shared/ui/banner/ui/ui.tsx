import { BannerDto } from "../../../../pages/defaultPage/libs/dtos";
import "./styles.scss";

type PropsType = {
    banner:BannerDto
}

export function Banner({ banner}: PropsType) {
    return <a href={banner.href} className="banner">
        <img src={banner.img} alt="" />
    </a>
}