import "./styles.scss"
import { Catalog } from "../../catalog"
import { MiniNews } from "../../../entities/AsideGroup/mini-news"
import { MiniReview } from "../../../entities/AsideGroup/mini-review"
import { SocialNetworks } from "../../../entities/AsideGroup/social-networks"
import { AdvertisingBanner } from "../../../entities/AsideGroup/advertising-banner"

export function Aside() {
    return <aside className="aside">
        <Catalog />
        {/* <DynamicAdaptive.Cut moveTo="aside-content" at={850}> */}
            <AdvertisingBanner/>
            <MiniNews />
            <SocialNetworks />
            <MiniReview />
        {/* </DynamicAdaptive.Cut> */}
    </aside>
}