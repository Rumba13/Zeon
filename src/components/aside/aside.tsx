import "./aside.scss"
import AdvertisingBanner from "../advertisingBanner/advertisingBanner"
import Catalog from "../catalog/catalog"
import SocialNetworks from "../socialNetworks/socialNetworks"
import SingleReview from "../singleReview/singleReview"
import { ICONS } from "../../images/images"
import { DynamicAdaptive } from "../legacy_dynamicAdaptive/dynamicAdaptive"
import { MiniNews } from "../../entities/miniNews"

export default function Aside() { //TODO refuck
    return <aside className="aside">
        <Catalog />
        <DynamicAdaptive.Cut moveTo="aside-content" at={850}>
            <AdvertisingBanner href="https://www.777555.by/service/" img={ICONS.repair} />
            <MiniNews/>
            <SocialNetworks />
            <SingleReview />
        </DynamicAdaptive.Cut>
    </aside>
}   