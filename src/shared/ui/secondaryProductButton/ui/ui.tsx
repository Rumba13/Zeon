import "./styles.scss";
import { Button } from "../../button";

type PropsType = {
    children: React.ReactNode,
    className?: string
}

export function SecondaryProductButton({ children,className }: PropsType) {
    return <Button className={`secondary-button ${className ?? ""}`}>{children}</Button>
}