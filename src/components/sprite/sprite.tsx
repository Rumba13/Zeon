import "./sprite.css";

type PropsType = {
    yOffset:number
}

export default function Sprite({ yOffset }: PropsType) {
        return <div style={{
            backgroundPositionY: yOffset
        }}
          className="icon"></div> //TODO:rename classname to "sprite" and fix all css

}