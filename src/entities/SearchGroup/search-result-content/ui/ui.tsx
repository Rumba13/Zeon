import { ProductAsFastSearchResult } from "../../../../shared/api/productAsFastSearchResult";
import { ProductAsFastResult } from "./productAsFastResult";
import "./styles.scss";

type PropsType = {

}

const products: ProductAsFastSearchResult[] = [
    {
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

        {products.map(product => <ProductAsFastResult product={product} />)}
    </div>
}