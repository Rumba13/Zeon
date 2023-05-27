import "./rounting.scss"
import ProductPage from "../productPage/productPage"
import Page404 from "../page404/page404"
import { Route, Routes } from "react-router"
import ProductSelectionPage from "../productSelectionPage/productSelectionPage"
import { DefaultPage } from "../../pages/defaultPage"

export default function Routing() {
    return <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/*" element={<ProductSelectionPage />} />
        <Route path="*" element={<Page404/>} />
    </Routes>
}   