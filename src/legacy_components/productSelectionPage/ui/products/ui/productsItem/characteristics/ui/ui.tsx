import "./styles.scss";
import { ProductCharacteristicsType } from "../../ui/ui";
import { formatCharacteristics } from "./formatCharacteristic";

type PropsType = {
    characteristics: ProductCharacteristicsType
}

export function Characteristics({ characteristics }: PropsType) {
    return <span className="product-information__characteristics">{formatCharacteristics(characteristics)}</span>
}