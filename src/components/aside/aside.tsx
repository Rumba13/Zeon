import "./aside.scss"
import Banner from "../banner/banner"
import Catalog from "../catalog/catalog"
import SocialNetworks from "../socialNetworks/socialNetworks"
import SingleNews from "../singleNews/singleNews"
import SingleReview from "../singleReview/singleReview"
import { ICONS } from "../../images/images"

export default function Aside() {
    return <aside className="aside">
       <Catalog/>
       <Banner href="https://www.777555.by/service/" imageSrc={ICONS.repair}/>
       <SingleNews text="Инспекция Министерства по налогам и сборам Республики Беларусь по Гомельской области напоминает, что срок представления налоговой декларации (расчета) по подоходному налогу с физических лиц, по доходам, полученным за 2022 год, с 1 января по 31 марта 2023 года." title="НАЛОГОВЫЕ ОРГАНЫ НАПОМИНАЮТ!" link="https://www.777555.by/news/174/"/>
       <SocialNetworks/>
       <SingleReview/>
    </aside>
}   