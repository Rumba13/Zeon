import { ProductAsFastSearchResult } from "../../../../shared/api/productAsFastSearchResult"
import { formatCharacteristics } from "../../../SearchPageGroup/characteristics/ui/formatCharacteristic"
import { formatDate } from "../../../SearchPageGroup/deliveryDate/ui/formatDate"
import { FastSearchProductDelivery } from "./fastSearchProductDelivery"

type PropsType = {
    product: ProductAsFastSearchResult
}

export function ProductAsFastResult({ product: { id, deliveryDate, previewImg, properties, title } }: PropsType) {



    return <div className="search-result-product">
        <img className="search-result-product__img" src={previewImg} alt="" />
        <h3 className="search-result-product__title">{title}</h3>
        <FastSearchProductDelivery deliveryDate={deliveryDate}/>
        <span className="search-result-product__code">Код товара: {id}</span>
        <span className="search-result-product__properties">{formatCharacteristics(properties)}</span>
    </div>
}