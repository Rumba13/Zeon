import Sprite from "../sprite/sprite"
import "./scrollTop.scss"

export default function ScrollTop() {
    return <div className="scroll-top-wrapper">
        <div className="scroll-top">
            <Sprite yOffset={-377} />
            <span className="scroll-top__text">Подняться на вверх сайта</span>
        </div>
    </div>
}