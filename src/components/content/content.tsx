import { Suspense } from "react"
import { Route, Routes } from "react-router"
import { Router } from "react-router-dom"
import MainPage from "../mainPage/mainPage"
import Page404 from "../page404/page404"
import Product from "../product/product"
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