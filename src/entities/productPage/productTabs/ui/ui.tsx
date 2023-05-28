import "./styles.scss";
import Icon from "../../../../components/icon/icon";
import Tabs, { TabType } from "../../../../components/tabs/tabs";
import { ICONS } from "../../../../images/images";

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

export function ProductTabs() {
    return <Tabs tabs={tabs} className="product-tabs"> </Tabs>
}