import { useEffect } from "react"

type SliderItemsOptionsType = {
    handleClickCreator: Function
}
export type SlickEventObject = {
    currentSlide: number,
    nextSlide: number
}

export function useSlickSlider(slickSliderClass: string, options: JQuerySlickOptions) {
    useEffect(() => {
        $(slickSliderClass).not('.slick-initialized').slick(options)
    }, [])

    function renderSliderItems(items: string[], options?: SliderItemsOptionsType) {
        return items.map((img, index) => <div key={img.toString()} onClick={options?.handleClickCreator(index)} className="slider__item"><img src={img} /></div>)
    }
    function addSlickEventListener(eventType: string, handler: Function) {
        $(slickSliderClass).on(eventType, (_event: any, _slick: any, currentSlide: number, nextSlide: number) => handler({ currentSlide, nextSlide }));
    }

    return { renderSliderItems, addSlickEventListener }
}