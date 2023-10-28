import "./styles.scss";
import {useEffect, useState} from "react";
import {CategoryItem} from "./category-item";
import {ProductCategoryType} from "../../../../shared/api/types/product-category-type";
import {
    productCategoriesState,
    ProductCategoriesStore
} from "../../../../widgets/product-categories/model/model";
import Loading from "../../../../shared/ui/loading/ui";

type PropsType = {}


export function ProductSearchCategories({}: PropsType) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
    const [activeProductDataId, setActiveProductDataId] = useState<number>(0);
    const categories: ProductCategoryType[] | undefined = productCategoriesState.productCategories;

    const setProductCategory = (event: any, index: number, dataId: number) => {
        event.preventDefault();

        setActiveCategoryIndex(index);
        setActiveProductDataId(dataId);

        return false;
    }

    useEffect(() => {
        productCategoriesState.loadProductCategories();
    }, [productCategoriesState.productCategories]);

    if (categories === undefined) {
        return <Loading/>;
    }

    return <ul className="product-search-categories scroll-bar">
        <h2 className="product-search-categories__title">Категории</h2>

        {categories.map((category, index) =>
            <CategoryItem isActive={index === activeCategoryIndex}
                          onClick={(e) => setProductCategory(e, index, category.dataId)}
                          productCategory={category}/>
        )}
    </ul>
}