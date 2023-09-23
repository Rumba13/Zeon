import { formatCharacteristics } from "../../../product/characteristics/ui/formatCharacteristic"
import { ProductDelivery } from "./product-delivery"
import {ProductFastSearchResultType} from "../../../../shared/api/types/product-fast-search-result-type";

type PropsType = {
    product: ProductFastSearchResultType
}
//TODO Пиздец Ахахаха Я честно хз что это. (Какая-то залупа(fix naming))
export function ProductFastSearchResult({ product: { id, deliveryDate, previewImg, properties, title } }: PropsType) {

    return <div className="search-result-product">
        <img className="search-result-product__img" src={previewImg} alt="" />
        <h3 className="search-result-product__title">{title}</h3>
        <ProductDelivery deliveryDate={deliveryDate}/>
        <span className="search-result-product__code">Код товара: {id}</span>
        <span className="search-result-product__properties">{formatCharacteristics(properties)}</span>
    </div>
}