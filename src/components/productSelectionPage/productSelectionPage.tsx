import "./productSelectionPage.scss";
import Filters from "./filters/filters";
import Paginator from "./paginator/paginator";
import Products from "./products/products";
import Tags from "./tags/tags";
import { TagType } from "./tags/tag/tag";
import { ProductType } from "./products/productsItem/productsItem";
import { ICONS } from "../../images/images";
import { DynamicAdaptive } from "../dynamicAdaptive/dynamicAdaptive";


const testTags: TagType[] = [
    { title: "0", link: "##", isActive: false },
    { title: "240gb", link: "##", isActive: false },
    { title: "512gb", link: "##", isActive: true },
    { title: "100000gb", link: "##", isActive: false },
    { title: "10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb 10000213133133123123130gb", link: "##", isActive: false },
]

const testProducts: ProductType[] = [
    {
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    },
    {
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    },
    {
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    },
    {
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    },{
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    },{
        manufacturer: "G.SKILL",
        type: "Оперативная память",
        batchNumber: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
        code: 1233131231331,
        characteristics: {lers:1,gay:"dsdasdad"},
        deliveryDate: (new Date(312313)),
        price: 100,
        discountPrice: 20000,
        previewImage: ICONS.slider1
    }
]

export default function ProductSelectionPage() {
    return <div className="product-selection-page">
        <DynamicAdaptive.Insert moveToMark="aside-content"/>

        <h2 className="product-selection-page__title">title</h2>
        <Tags tags={testTags} />
        <Filters />
        <Products products={testProducts} />
        <Paginator />
    </div>
}