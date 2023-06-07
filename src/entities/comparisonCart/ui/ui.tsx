import "./styles.scss"
import { Sprite } from "../../../shared/ui/sprite"
 
export function ComparisonCart() {
    return <a href="##" className="product-action comparison-cart">
        <Sprite yOffset={-964} />
        <span className="product-action__text">В сравнении</span>
        <span className="product-action__counter">0</span>
    </a>
}