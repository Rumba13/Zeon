import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { CategoryItem } from "./category-item";
import { ProductCategoryType } from "../libs/productCategoryType";

type PropsType = {

}

const categories: ProductCategoryType[] = [
    { link: "", dataId: 0, title: "Все" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "Evka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "Evka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "asdadaddsdddsdaasdd adsasdada ada sdaadadd sd  ada ada dsadasdad " },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "Evka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "Evka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 123, title: "Vlad" },
    { link: "", dataId: 55, title: "Lerka" },
    { link: "", dataId: 23, title: "Evka" },
    { link: "", dataId: 76, title: "Dimka" },
    { link: "", dataId: 76, title: "Dimka" },
]

export function ProductSearchCategories({ }: PropsType) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
    const [activeProductDataId, setActiveProductDataId] = useState<number>(0);


    const categoryItemOnClickHandler = (event: any, index: number, dataId: number) => {
        event.preventDefault();

        setActiveCategoryIndex(index);
        setActiveProductDataId(dataId);

        return false;
    }

    return <ul className="product-search-categories">
        <h2 className="product-search-categories__title">Категории</h2>
        {categories.map((category, index) => <CategoryItem isActive={index === activeCategoryIndex} onClick={(e) => categoryItemOnClickHandler(e, index, category.dataId)} productCategory={category} />)}
    </ul>
}