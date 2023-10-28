import "./styles.scss";
import 'swiper/css';
import "swiper/swiper-bundle.css";
import 'swiper/css/thumbs';
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Navigation, Thumbs,} from "swiper/modules";
import {observer} from "mobx-react";
import ImageNotFoundIcon from "../../../../../images/image-not-found.jpg"

type PropsType = {
    items: string[],
    sliderThumbs: typeof Swiper
}

export const MainProductSlider = observer(({items = [ImageNotFoundIcon], sliderThumbs}: PropsType) => {
    return <Swiper
        className="main-product-slider"
        autoplay={{delay: 3000}}
        loop={true}
        direction="horizontal"
        modules={[Navigation, Thumbs]}
        slidesPerView={1}
        navigation={{enabled: true,}}
        //@ts-ignore
        thumbs={{swiper: sliderThumbs && !sliderThumbs.destroyed ? sliderThumbs : null}}
    >
        {items.map(slide => <SwiperSlide><img src={slide} alt=""/></SwiperSlide>)}
    </Swiper>
})