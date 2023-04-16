import "./abstractAddProductToCart.scss";
import Button from "../productPage/button/button";

type PropsType = {
    id:number,
    children:React.ReactNode
}

export default function abstractAddProductToComparison({id,children}:PropsType) {
    return <Button className="cart-button">{children}</Button>
}