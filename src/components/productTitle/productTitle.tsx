import { Link } from "react-router-dom";
import "./productTitle.scss";

type PropsType = {
    manufacturer:string,
    productType:string,
    batchNumber:string,
    id:number,
    className?:string
}


export default function ProductTitle({className,batchNumber,manufacturer,productType,id}:PropsType) {
    return <Link className={className} to={`/product/${id}`}>{manufacturer}{productType}{batchNumber}</Link>
}