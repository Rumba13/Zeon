import Sprite from "../sprite/sprite"
import "./scrollTop.css"

export default function ScrollTop() {
    return <div className="scroll-top">
        <Sprite yOffset={-377}/>
        <span className="scroll-top__text">Подняться на вверх сайта</span>
    </div>
}