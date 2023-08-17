import "./styles.scss";
import { Button } from "../../button";

type PropsType = {
    children: React.ReactNode,
    onClick?: Function,
    className?:string
}

export function PrimaryProductButton({ children, onClick,className }: PropsType) {
    return <Button className={`cart-button ${className || ""}`} onClick={onClick}>{children}</Button>
}