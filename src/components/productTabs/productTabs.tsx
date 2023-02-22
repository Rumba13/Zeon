import Icon from "../icon/icon";
import Tabs, { TabType } from "../tabs/tabs";
import "./productTabs.scss";
import reviewsIcon from "../../images/reviews-icon.png"
import characterIcon from "../../images/characterIcon.png"
import TabTitle from "../tabTitle/tabTitle";
import TabTitles from "../tabTitles/tabTitles";

const tabs: TabType[] = [
    {
        title: <>
            <Icon icon={characterIcon} />
            Характеристики
        </>,
        content: "gays"
    },
    {
        title: <>
        <Icon icon={reviewsIcon} />
            Отзывы (0)
        </>,
        content: "lers"
    },
]

export default function ProductTabs() {
    return <Tabs className="product-tabs" tabs={tabs}>
        <TabTitles>
            <TabTitle>Lers</TabTitle>
            <TabTitle>Gays</TabTitle>
        </TabTitles>
        {/* <TabContents>
            <TabContent>ldasd</TabContent>
            <TabContent>ldasd</TabContent>
        </TabContents> */}
    </Tabs>
}