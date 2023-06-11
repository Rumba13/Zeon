import "./styles.scss";
import { formatCharacteristics } from "./formatCharacteristic";
import { ProductCharacteristicsType } from "../../productsItem/ui/ui";

type PropsType = {
    characteristics: ProductCharacteristicsType
}

export function Characteristics({ characteristics }: PropsType) {
    return <span className="characteristics">{formatCharacteristics(characteristics)}</span>
}