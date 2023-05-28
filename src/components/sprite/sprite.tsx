import { MouseEventHandler } from "react";
import "./sprite.scss";

type PropsType = {
    yOffset: number | null,
    className?: string,
    onClick?: Function
}

export default function Sprite({ yOffset, className,onClick }: PropsType) {
    return <div
        style={{ backgroundPositionY: yOffset ? yOffset : undefined }}
        className={`sprite ${className ?? ""}`}
        onClick={onClick as MouseEventHandler<HTMLDivElement>}
        >
            
    </div>
}