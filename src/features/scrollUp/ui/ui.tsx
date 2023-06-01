import "./styles.scss"
import { Sprite } from "../../../shared/ui//sprite"
import { scrollUp } from "../lib/scrollUp"

export function ScrollUp() {

    return <div onClick={scrollUp} className="scroll-up-wrapper">
        <div className="scroll-up">
            <Sprite yOffset={-377} />
            <span className="scroll-up__text">Подняться на вверх сайта</span>
        </div>
    </div>
}