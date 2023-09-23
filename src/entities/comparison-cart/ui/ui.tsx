import "./styles.scss"
import { Sprite } from "../../../shared/ui/sprite"
import { observer } from "mobx-react"
import { useStore } from "../../../shared/lib/hooks"

export const ComparisonCart = observer(() => { 
    const comparison = useStore(state => state.comparisonCart);
    
    return <a href="##" className="product-action comparison-cart">
        <Sprite yOffset={-964} />
        <span className="product-action__text">В сравнении</span>
        <span className="product-action__counter">{comparison.productsCount}</span>
    </a>
})