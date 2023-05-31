import "./styles.scss"
import { Route, Routes } from "react-router"
import ProductSelectionPage from "../../../components/productSelectionPage/productSelectionPage"
import { DefaultPage } from "../../defaultPage"
import { Page404 } from "../../page404"
import { ProductPage } from "../../productPage"

export function Routing() {
    return <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/*" element={<ProductSelectionPage />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
}   