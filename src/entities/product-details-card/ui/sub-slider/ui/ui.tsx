import "./styles.scss";
import 'swiper/css';
import 'swiper/css/thumbs';
import {SwiperSlide, Swiper} from "swiper/react";
import {Controller, Thumbs} from "swiper/modules";
import ImageNotFoundIcon from "../../../../../images/image-not-found.jpg";

type PropsType = {
    items: string[],
    setSliderThumbs: Function
}

export function SubProductSlider({items = [ImageNotFoundIcon], setSliderThumbs}: PropsType) {

    return <Swiper
        className="sub-product-slider"
        modules={[Controller, Thumbs]}
        onSwiper={setSliderThumbs}
        loop={true}
        slidesPerView={5}
        slideToClickedSlide={true}
        speed={1500}
    >
        {items.map(slide => <SwiperSlide><img src={slide} alt=""/></SwiperSlide>)}
    </Swiper>
}