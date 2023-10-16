import "./styles.scss";
import {
    ProductFastSearchResultType
} from "../../../../shared/api/types/product-fast-search-result-type";
import {ProductFastSearchResult} from "./product-fast-search-result";

type PropsType = {

}

const products: ProductFastSearchResultType[] = [
    {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий sdhaudh hsdh ashdahsahdhadukashud hadhhadauad uhdahduahduhau hdahdu",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")
    },
    {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    }, {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    }, {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    }, {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    },
    {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    }, {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")

    }, {
        id: 112313,
        title: "Пылесос PUGNA против иллюзий",
        previewImg: "https://gas-kvas.com/uploads/posts/2023-01/1673326120_gas-kvas-com-p-anime-stoni-risunki-6.jpg",
        properties: { 1: "Контейнер для пуджа" },
        inOrder: true,
        deliveryDate: new Date("2023-11-22")
    },

]

export function SearchResultContent({ }: PropsType) {
    return <div className="search-results-content scroll-bar">
        <h2 className="search-results-content__title">Популярные товары</h2>

        {products.map(product => <ProductFastSearchResult product={product} />)}
    </div>
}