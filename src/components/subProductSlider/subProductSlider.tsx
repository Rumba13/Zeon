import "./subProductSlider.scss";

type PropsType = {
    sliderItems: string[]
}

export default function SubProductSlider({ sliderItems }: PropsType) {

    function onClickHandler(index:number) {
        $(".sub-product-slider").slick('slickGoTo', index, true);
    }

    function activateSlickSlider() {
        $('.sub-product-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".main-product-slider"
        });
    }

    setTimeout(activateSlickSlider, 0);

    return <div className="sub-product-slider">
        {sliderItems.map((item, index) => <div onClick={() => onClickHandler(index)} className="slider__item"><img src={item} alt="" /></div>)}
    </div>
}