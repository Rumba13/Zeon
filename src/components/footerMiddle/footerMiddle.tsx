import "./footerMiddle.scss";
import { ICONS } from "../../images/images";


export default function FooterMiddle() {
    return <div className="footer-middle">
        <span className="footer-middle__copyright">© 2023 ООО «Зеон плюс»</span>
        <a href="##" className="footer-middle__rules">Правила обработки персональных данных</a>
        <a href="https://market.yandex.by/shop/259201/reviews/add" className="href">
            <img src={ICONS.yandexLogo} alt="yandex" />
        </a>
    </div>
}