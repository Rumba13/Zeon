import "./styles.scss";
import 'swiper/css';
import "swiper/swiper-bundle.css";
import {useEffect} from "react";
import {observer} from "mobx-react";
import Loading from "../../../../shared/ui/loading/ui";
import {homeSliderState} from "../model/model";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from 'swiper/modules';

type PropsType = {}

export const BannerSlider = observer(({}: PropsType) => {

    useEffect(() => {
        homeSliderState.loadSliderItems();
    }, [])

    if (!homeSliderState.sliderItems) {
        return <Loading/>;
    }

    return <Swiper
        className="banner-slider"
        autoplay={{delay: 3000}}
        loop={true}
        direction="horizontal"
        modules={[Pagination, Navigation]}
        pagination={{
            type: "bullets",
            clickable: true,
            bulletClass: "dot",
            bulletActiveClass: "_active",
            renderBullet(i:number, className:string) {
                return `<div class=${className}></div>`;
            },
        }}
    >
        {homeSliderState.sliderItems.map(slide => <SwiperSlide><img src={slide} alt=""/></SwiperSlide>)}
    </Swiper>
})