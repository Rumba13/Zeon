import "./copyrightAndRules.scss";
import { ICONS } from "../../../images/images";

export default function CopyrightAndRules() {
    return <div className="copyright-and-rules">
        <span className="copyright-and-rules__copyright">© 2023 ООО «Зеон плюс»</span>
        <a href="##" className="copyright-and-rules__rules">Правила обработки персональных данных</a>

        <a href="https://market.yandex.by/shop/259201/reviews/add" className="href"><img src={ICONS.yandexLogo} alt="yandex" /></a>
    </div>
}