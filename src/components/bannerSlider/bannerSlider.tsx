import Banner from "../banner/banner";
import testImage from "../../images/bannerSliderTest.jpg"
import "./bannerSlider.scss";

export default function BannerSlider() {
    return <img src={testImage} alt="" className="banner-slider" />
}