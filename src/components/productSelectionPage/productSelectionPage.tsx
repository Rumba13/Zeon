import "./productSelectionPage.scss";
import Filters from "./filters/filters";
import Paginator from "./paginator/paginator";
import Products from "./products/products";
import Tags from "./tags/tags";
import { TagType } from "./tags/tag/tag";


const testTags:TagType[] = [
    {title:"0", link:"##", isActive:false},
    {title:"240gb", link:"##", isActive:false},
    {title:"512gb", link:"##", isActive:true},
    {title:"100000gb", link:"##", isActive:false},
    {title:"10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb 10000213133133123123130gb", link:"##", isActive:false},
]

export default function ProductSelectionPage() {
    
    return <div className="product-selection-page">
        <h2 className="product-selection-page__title">title</h2>
        <Tags tags={testTags}/>
        <Filters/>
        <Products/>
        <Paginator/>
    </div>
}