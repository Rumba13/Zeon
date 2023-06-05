import "./styles.scss"
import { ICONS } from "../../../images/images"
import { MiniNews } from "../../../entities/miniNews"
import { MiniReview } from "../../../entities/miniReview"
import Banner from "../../../shared/ui/banner/banner"
import { SocialNetworks } from "../../../entities/socialNetworks"
import { Catalog } from "../../catalog"

export function Aside() { //TODO refuck
    return <aside className="aside">
        <Catalog />
        {/* <DynamicAdaptive.Cut moveTo="aside-content" at={850}> */}
            <Banner banner={{ href: "https://www.777555.by/service/", img: ICONS.repair }} />
            <MiniNews />
            <SocialNetworks />
            <MiniReview />
        {/* </DynamicAdaptive.Cut> */}
    </aside>
}