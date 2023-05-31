import "./aside.scss"
import Catalog from "../catalog/catalog"
import SocialNetworks from "../socialNetworks/socialNetworks"
import { ICONS } from "../../images/images"
import { DynamicAdaptive } from "../legacy_dynamicAdaptive/dynamicAdaptive"
import { MiniNews } from "../../entities/miniNews"
import { MiniReview } from "../../entities/miniReview"
import Banner from "../../shared/banner/banner"

export default function Aside() { //TODO refuck
    return <aside className="aside">
        <Catalog />
        <DynamicAdaptive.Cut moveTo="aside-content" at={850}>
            <Banner banner={{ href: "https://www.777555.by/service/", img: ICONS.repair }} />
            <MiniNews />
            <SocialNetworks />
            <MiniReview />
        </DynamicAdaptive.Cut>
    </aside>
}