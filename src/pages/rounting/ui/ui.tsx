import "./styles.scss"
import {HomePage} from "../../home-page"
import {Page404} from "../../page-404"
import {ProductPage} from "../../product-details-page"
import {SearchPage} from "../../search-page"
import {Route, Routes} from "react-router"
import {NewsPage} from "../../news-page/ui/ui";

export function Routing() {
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/news/:id" element={<NewsPage/>}/>
        <Route path="*" element={<Page404/>}/>
    </Routes>
}   