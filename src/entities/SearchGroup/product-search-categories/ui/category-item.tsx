import { Link } from "react-router-dom"
import { ProductCategoryType } from "../libs/productCategoryType"
import { MouseEventHandler } from "react"

type PropsType = {
    productCategory: ProductCategoryType,
    onClick: MouseEventHandler<HTMLAnchorElement>,
    isActive: boolean
}

export function CategoryItem({ productCategory, onClick, isActive }: PropsType) {
    return <li className={`categories-list__item ${isActive ? "_active" : ""}`}> <Link onClick={onClick} to={productCategory.link}>{productCategory.title}</Link></li>
}