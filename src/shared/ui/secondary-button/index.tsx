import "./styles.scss";
import {Button} from "../button";

type PropsType = {
    children: React.ReactNode,
    onClick?: Function
    className?: string
}

export function SecondaryButton({children, className, onClick}: PropsType) {
    return <Button className={`secondary-button ${className ?? ""}`} onClick={onClick}>{children}</Button>
}