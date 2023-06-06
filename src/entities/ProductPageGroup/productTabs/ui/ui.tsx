import "./styles.scss";
import { ICONS } from "../../../../images/images";
import { Icon } from "../../../../shared/ui//icon";
import { TabType, Tabs } from "../../../../shared/ui/tabs";

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
    }
]

export function ProductTabs() {
    return <Tabs tabs={tabs} className="product-tabs"> </Tabs>
}