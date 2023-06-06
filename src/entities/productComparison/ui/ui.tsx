import "./styles.scss"
import { Sprite } from "../../../shared/ui/sprite"
 
export function ComparisonCart() {
    return <a href="##" className="comparison-cart product-action">
        <Sprite yOffset={-964} />
        <span className="product-action__text">В сравнении</span>
        <span className="counter">{0}</span>
    </a>
}