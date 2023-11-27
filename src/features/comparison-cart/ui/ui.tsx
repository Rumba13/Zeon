import "./styles.scss"
import { Sprite } from "../../../shared/ui/sprite/ui"
import { observer } from "mobx-react"
import {comparisonCartState} from "../model/model";

export const ComparisonCart = observer(() => {

    return <a href="##" className="product-action comparison-cart">
        <Sprite yOffset={-964} />
        <span className="product-action__text">В сравнении</span>
        <span className="product-action__counter">{comparisonCartState.productsCount}</span>
    </a>
})