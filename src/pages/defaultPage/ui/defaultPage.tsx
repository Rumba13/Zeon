import "./defaultPage.scss";
import BannerSlider from "../../../entities/bannerSlider/ui/bannerSlider";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../shared/hooks";
import Banner from "../../../shared/banner/banner";
import { Loading } from "../../../shared/loading";
import { loadProductSelectionsThunk, loadDefaultProductsThunk, loadAdvertisingBannerThunk, loadSliderItemsThunk } from "../model/model";
import { ProductSelectionsWidget } from "../../../widgets/defaultPage/productSelections";
import { ProductsWidget } from "../../../widgets/defaultPage/products";


export function DefaultPage() {
    const state = useAppSelector(state => state.defaultPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProductSelectionsThunk());
        dispatch(loadDefaultProductsThunk());
        dispatch(loadAdvertisingBannerThunk());
        dispatch(loadSliderItemsThunk());
    }, [dispatch, loadProductSelectionsThunk, loadDefaultProductsThunk, loadAdvertisingBannerThunk])

    return <div className="content">
        
        {state.advertisingBanner
            ? <Banner img={state.advertisingBanner.img} href={state.advertisingBanner.href} />
            : <Loading />
        }

        {state.sliderItems
            ? <BannerSlider items={state.sliderItems} />
            : <Loading />
        }

        {state.productSelections
            ? <ProductSelectionsWidget selections={state.productSelections} />
            : <Loading />
        }

        {state.products
            ? <ProductsWidget products={state.products} />
            : <Loading />
        }

    </div>
}