import "./defaultPage.scss";
import Banner from "../banner/banner";
import BannerSlider from "./bannerSlider/bannerSlider";
import ProductSelection from "../productSelection/productSelection";
import { ICONS } from "../../images/images";
import { ProductType } from "../productSelectionPage/products/productsItem/productsItem";
import { DynamicAdaptive } from "../dynamicAdaptive/dynamicAdaptive";
import Product from "../../widgets/product/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { useEffect } from "react";
import { setAdvertisingBannerThunk, setDefaultProductsThunk, setProductSelectionsThunk } from "../../pages/defaultPage";
import { Loading } from "../../shared/loading";


export default function DefaultPage() {
    const state = useAppSelector(state => state.defaultPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setProductSelectionsThunk())
        dispatch(setDefaultProductsThunk())
        dispatch(setAdvertisingBannerThunk())
    }, [dispatch, setProductSelectionsThunk, setDefaultProductsThunk, setAdvertisingBannerThunk])

    return <div className="content">

        {state.advertisingBanner
            ? <Banner img={state.advertisingBanner.img} href={state.advertisingBanner.href} />
            : <Loading />
        }

        <BannerSlider />

        <div className="product-selections">
            {state.productSelections
                ? state.productSelections.map(selection => <ProductSelection {...selection} />)
                : <Loading />
            }
        </div>

        <div className="products">
            <div className="product-container">
                {state.products
                    ? state.products.map(product => <Product {...product} />)
                    : <Loading />
                }
            </div>
        </div>
    </div>
}