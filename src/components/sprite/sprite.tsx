import "./sprite.css";

type PropsType = {
    yOffset:number
}

export default function Sprite({ yOffset }: PropsType) {
        return <div style={{
            backgroundPositionY: yOffset
        }}
          className="sprite"></div>
}