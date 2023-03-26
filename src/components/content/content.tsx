import "./content.scss"
import MainPage from "../defaultPage/defaultPage"
import ProductPage from "../productPage/productPage"
import Page404 from "../page404/page404"
import { Route, Routes } from "react-router"
import ProductSelectionPage from "../productSelectionPage/productSelectionPage"

export default function Content() {
    return <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="/search/*" element={<ProductSelectionPage />} />
        <Route path="*" element={<Page404/>} />
    </Routes>
}   