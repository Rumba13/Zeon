import "./styles.scss"
import {Catalog} from "../../catalog"
import {MiniNews} from "../../../entities/mini-news"
import {MiniReview} from "../../../entities/mini-review"
import {SocialNetworks} from "../../../entities/social-networks"
import {AdvertisingBanner} from "../../../entities/advertising-banner"

export function Aside() {
    return <aside className="aside">
        <Catalog/>
        <AdvertisingBanner/>
        <MiniNews/>
        <SocialNetworks/>
        <MiniReview/>
    </aside>
}