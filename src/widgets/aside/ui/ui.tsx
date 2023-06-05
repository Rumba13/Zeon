import "./styles.scss"
import { ICONS } from "../../../images/images"
import { Catalog } from "../../catalog"
import { MiniNews } from "../../../entities/AsideGroup/miniNews"
import { MiniReview } from "../../../entities/AsideGroup/miniReview"
import { SocialNetworks } from "../../../entities/AsideGroup/socialNetworks"
import Banner from "../../../shared/ui/banner/banner"

export function Aside() { //TODO refuck to layout
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