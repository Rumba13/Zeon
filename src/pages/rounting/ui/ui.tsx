import "./styles.scss"
import { Route, Routes } from "react-router"
import { DefaultPage } from "../../defaultPage"
import { Page404 } from "../../page404"
import { ProductPage } from "../../productPage"
import { SearchPage } from "../../searchPage/ui/ui"

export function Routing() {
    return <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/:page" element={<SearchPage />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
}   