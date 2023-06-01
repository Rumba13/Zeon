import "./styles.scss";
import { Button } from "../../button";

type PropsType = {
    children:React.ReactNode
}

export function SecondaryProductButton({children}:PropsType) {
    return <Button className="secondary-button">{children}</Button>
}