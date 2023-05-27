import ProductSelection from "../../../../components/productSelection/productSelection";
import { ProductSelectionDto } from "../../../../pages/defaultPage/libs/dtos";

type PropsType = {
    selections: ProductSelectionDto[]
}

export function ProductSelectionsWidget({ selections }: PropsType) {

    return <div className="product-selections">
        {selections.map(selection => <ProductSelection {...selection} />)}
    </div>
}