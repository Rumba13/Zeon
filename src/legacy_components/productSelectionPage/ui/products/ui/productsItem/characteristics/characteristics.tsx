import { ProductCharacteristicsType } from "../productsItem";
import "./characteristics.scss";

type PropsType = {
    characteristics?: ProductCharacteristicsType
}

export default function Characteristics({characteristics}:PropsType) {
    function formatCharacteristics(characteristics:any ) {
        const characteristicsArray:string[] = [];

        for(const key in characteristics) {
            if(characteristics.hasOwnProperty(key)) {
                const characteristic = characteristics[key];
                characteristicsArray.push(characteristic)
            }
        }

        return characteristicsArray.join(", ")
    }

    return   <span className="product-information__characteristics">{formatCharacteristics(characteristics)}</span>
}