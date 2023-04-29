import "./sprite.scss";

type PropsType = {
    yOffset: number | null,
    className?: string
}

export default function Sprite({ yOffset, className }: PropsType) {
    return <div
        style={{ backgroundPositionY: yOffset ? yOffset : undefined }}
        className={`sprite ${className ?? ""}`}>

    </div>
}