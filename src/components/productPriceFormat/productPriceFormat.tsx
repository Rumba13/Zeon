import "./productPriceFormat.scss";

type PropsType = {
    children?:number
}

export default function ProductPriceFormat({children}:PropsType) {
    if(!children) {
        return <></>
    }
    
    return <>{`${children.toFixed(2).replace(".", ",")} руб`}</>
}