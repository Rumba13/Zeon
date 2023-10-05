import "./styles.scss";
import ImageNotFoundIcon from "../../../../images/image-not-found.jpg"
import 'swiper/css';
import {SwiperSlide, Swiper} from "swiper/react";
import {Controller,Thumbs } from "swiper/modules";
import 'swiper/css/thumbs';
type PropsType = {
    items: string[],
    setSubSlider: Function,
    mainSlider: typeof Swiper
}

export function SubProductSlider({items = [ImageNotFoundIcon], setSubSlider,mainSlider}: PropsType) {

    return <Swiper
        className="sub-product-slider"
        modules={[Controller,Thumbs ]}
        onSwiper={setSubSlider}
        loop={true}
        slidesPerView={5}
        slideToClickedSlide={true}
    speed={1500}
    >
        {items.map(slide => <SwiperSlide><img src={slide}/></SwiperSlide>)}
    </Swiper>
}