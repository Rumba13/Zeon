import "./styles.scss";
import { Button } from "../../button";

type PropsType = {
    children:React.ReactNode
}
//TODO refuck
export function PrimaryProductButton({children}:PropsType) {
    return <Button className="cart-button">{children}</Button>
}