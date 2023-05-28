import "./rounting.scss"
import { Route, Routes } from "react-router"
import ProductSelectionPage from "../productSelectionPage/productSelectionPage"
import { DefaultPage } from "../../pages/defaultPage"
import { Page404 } from "../../pages/page404"
import ProductPage from "../../pages/productPage/ui/productPage"

export default function Routing() {
    return <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/*" element={<ProductSelectionPage />} />
        <Route path="*" element={<Page404/>} />
    </Routes>
}   