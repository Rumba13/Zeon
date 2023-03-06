import { Route, Routes } from "react-router"
import MainPage from "../defaultPage/defaultPage"
import Page404 from "../page404/page404"
import ProductPage from "../productPage/productPage"
import "./content.scss"

type PropsType = {}


export default function Content({ }: PropsType) {
    return <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="*" element={<Page404/>} />
    </Routes>
}   