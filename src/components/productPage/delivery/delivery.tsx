import Tabs, { TabType } from "../../tabs/tabs";
import "./delivery.scss";

const testTabs: TabType[] = [
    {
        title: "Доставка по Гомелю",
        content: <>
            Ориентировочная поставка в магазин: 22.02.2023 (ср)Курьером до подьезда -<span className="highlight">22.02.2023 (ср)</span> , <span className="highlight">5 BYN.</span>
        </>
    },
    {
        title: "по Гомельской области",
        content: <>Речица - Калинковичи - Мозырь - 26.02.2023 (вс) <span className="highlight">5 BYN.</span>,
            Жлобин - Рогачев - Светлогорск - 26.02.2023 (вс) <span className="highlight">5 BYN.</span>,
            Добруш - Ветка - 26.02.2023 (вс) <span className="highlight">10 BYN.</span> </>
    },
    {
        title: "по Бобруйску",
        content: <>Бобруйск - 23.02.2023 (чт), <span className="highlight">5 BYN.</span></>
    },
]

export default function Delivery() {
    return <Tabs className="delivery-tabs" tabs={testTabs} />
}