import "./productTabs.scss";
import Icon from "../../icon/icon";
import Tabs, { TabType } from "../../tabs/tabs";
import TabTitle from "../../tabs/tabTitle/tabTitle";
import TabTitles from "../../tabs/tabTitles/tabTitles";
import { ICONS } from "../../../images/images";
import TabContents from "../../tabs/tabContents/tabContents";
import TabContent from "../../tabs/tabContent/tabContent";

const tabs: TabType[] = [
    {
        title: <>
            <Icon icon={ICONS.characteristic} />
            Характеристики
        </>,
        content: "gays"
    },
    {
        title: <>
        <Icon icon={ICONS.reviews} />
            Отзывы (0)
        </>,
        content: "lers"
    },
]

export default function ProductTabs() {
    return <Tabs tabs={tabs} className="product-tabs"> </Tabs>
}