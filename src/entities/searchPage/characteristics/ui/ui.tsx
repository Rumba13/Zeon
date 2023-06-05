import "./styles.scss";
import { formatCharacteristics } from "./formatCharacteristic";
import { ProductCharacteristicsType } from "../../productsItem/ui/ui";

type PropsType = {
    characteristics: ProductCharacteristicsType
}

export function Characteristics({ characteristics }: PropsType) {
    return <span className="product-information__characteristics">{formatCharacteristics(characteristics)}</span>
}