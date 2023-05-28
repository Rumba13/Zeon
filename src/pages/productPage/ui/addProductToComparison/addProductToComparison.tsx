import AddProductToComparison from "../../../../components/productSelectionPage/products/productsItem/addProductToComparison/addProductToComparison"

type PropsType = {
    id:number,
}

export default function ProductPageAddProductToComparison({id}:PropsType) {
    return <AddProductToComparison id={id}/>
        {/* <span className="comparison-button__text">Добавить к сравнению</span> */}
   
}