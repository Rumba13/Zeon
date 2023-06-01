import { Sprite } from "../../../shared/ui//sprite"
import "./styles.scss"
 

export function ProductComparison() {
    return <a href="##" className="comparison product-action">
        <Sprite yOffset={-964} />

        <span className="product-action__text">В сравнении</span>
        <span className="counter">{0}</span>
    </a>
}