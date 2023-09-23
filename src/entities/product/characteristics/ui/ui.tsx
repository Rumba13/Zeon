import "./styles.scss";
import { formatCharacteristics } from "./formatCharacteristic";
import { ProductCharacteristicsType } from "../../../product-search-result/ui/ui";

type PropsType = {
    characteristics: ProductCharacteristicsType
}

export function Characteristics({ characteristics }: PropsType) {
    return <span className="characteristics">{formatCharacteristics(characteristics)}</span>
}