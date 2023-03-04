import "./sprite.scss";

type PropsType = {
    yOffset: number | null,
}

export default function Sprite({ yOffset }: PropsType) {
    return <div style={{ backgroundPositionY: yOffset ? yOffset : undefined }} className="sprite"></div>
}