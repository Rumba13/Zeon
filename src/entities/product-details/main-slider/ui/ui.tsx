import "./styles.scss";
import 'swiper/css';
import "swiper/swiper-bundle.css";
import ImageNotFoundIcon from "../../../../images/image-not-found.jpg"
import { Navigation, Thumbs,} from "swiper/modules";
import {Swiper} from "swiper/react";
import 'swiper/css';
import {SwiperSlide} from "swiper/react";
import {observer} from "mobx-react";
import 'swiper/css/thumbs';

type PropsType = {
    items: string[],
    setMainSlider: Function,
    subSlider: typeof Swiper
}

export const MainProductSlider = observer(({items = [ImageNotFoundIcon], setMainSlider, subSlider}: PropsType) => {

    return <Swiper
        className="main-product-slider"
        autoplay={{delay: 3000}}
        loop={true}
        direction="horizontal"
        modules={[Navigation, Thumbs]}
        onSwiper={setMainSlider}
        slidesPerView={1}
        navigation={{enabled:true, }}
        //@ts-ignore
        thumbs={{swiper: subSlider && !subSlider.destroyed ? subSlider : null}}
    >
        {items.map(slide => <SwiperSlide><img src={slide} alt=""/></SwiperSlide>)}
    </Swiper>
})