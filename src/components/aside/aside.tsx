import "./aside.scss"
import { ICONS } from "../../images/images"
import { DynamicAdaptive } from "../legacy_dynamicAdaptive/dynamicAdaptive"
import { MiniNews } from "../../entities/miniNews"
import { MiniReview } from "../../entities/miniReview"
import Banner from "../../shared/banner/banner"
import { Catalog } from "../catalog"
import { SocialNetworks } from "../../entities/socialNetworks"

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