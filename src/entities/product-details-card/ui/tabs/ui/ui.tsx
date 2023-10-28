import "./styles.scss";
import {Icon} from "../../../../../shared/ui/icon";
import {TabType, Tabs} from "../../../../../shared/ui/tabs";
import characteristicIcon from "../../../../../images/characterIcon.png";
import reviewsIcon from "../../../../../images/reviews-icon.png";

const tabs: TabType[] = [
    {
        title: <>
            <Icon icon={characteristicIcon}/>
            Характеристики
        </>,
        content: "gays"
    },
    {
        title: <>
            <Icon icon={reviewsIcon}/>
            Отзывы (0)
        </>,
        content: "lers"
    }
]

export function ProductTabs() {
    return <Tabs tabs={tabs} className="product-tabs"> </Tabs>
}