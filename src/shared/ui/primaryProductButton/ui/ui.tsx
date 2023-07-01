import "./styles.scss";
import { Button } from "../../button";

type PropsType = {
    children: React.ReactNode,
    onClick?: Function
}
//TODO refuck
export function PrimaryProductButton({ children, onClick }: PropsType) {
    return <Button className="cart-button" onClick={onClick}>{children}</Button>
}