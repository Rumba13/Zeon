import "./scrollTop.scss"
import Sprite from "../sprite/sprite"

export default function ScrollTop() {

    function onClickCreator() {
        return () => {
            window.scroll({top: 0, left: 0, behavior: 'smooth' });
        }
    }

    return <div onClick={onClickCreator()} className="scroll-top-wrapper">
        <div className="scroll-top">
            <Sprite yOffset={-377} />
            <span className="scroll-top__text">Подняться на вверх сайта</span>
        </div>
    </div>
}