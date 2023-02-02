import "./sprite.css";

type PropsType = {
    yOffset:number | null,
}

export default function Sprite({ yOffset }: PropsType) {

    if(yOffset === null) {
       return <div className="sprite"></div>
    }
    else {
        return <div style={{backgroundPositionY: yOffset}} className="sprite"></div>
    }
}