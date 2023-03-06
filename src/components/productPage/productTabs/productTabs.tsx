import "./productTabs.scss";
import Icon from "../../icon/icon";
import Tabs, { TabType } from "../../tabs/tabs";
import TabTitle from "../../tabs/tabTitle/tabTitle";
import TabTitles from "../../tabs/tabTitles/tabTitles";
import { ICONS } from "../../../images/images";

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