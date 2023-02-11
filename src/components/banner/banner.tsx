import "./banner.scss";
import bannerRepair from "../../images/banner-repair.jpg"

export default function Banner() {
    return <a href="https://www.777555.by/service/" className="banner">
        <img src={bannerRepair} alt="" />
    </a>
}