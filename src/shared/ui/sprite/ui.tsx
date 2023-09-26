import "./styles.scss";
import { MouseEventHandler } from "react";

type PropsType = {
    yOffset: number | null,
    className?: string,
    onClick?: Function
}
export function Sprite({ yOffset, className,onClick }: PropsType) {
    return <div
        style={{ backgroundPositionY: yOffset ? yOffset : undefined }}
        className={`sprite ${className ?? ""}`}
        onClick={onClick as MouseEventHandler}
        >
            
    </div>
}