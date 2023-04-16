import AddProductToComparison from "../../abstractAddProductToComparison/abstractAddProductToComparison"

type PropsType = {
    id:number,
}

export default function ProductPageAddProductToComparison({id}:PropsType) {
    return <AddProductToComparison id={id}>
        <span className="comparison-button__text">Добавить к сравнению</span>
    </AddProductToComparison>
}