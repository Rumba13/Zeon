import "./productPriceFormat.scss";

type PropsType = {
    children?:number | string
}

export default function ProductPriceFormat({children}:PropsType) {
    if(!children) {
        return <></>
    }
    
    return <>{`${Number(children).toFixed(2).replace(".", ",")} руб`}</>
}