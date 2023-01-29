import "./icon.css";

export type SpriteType = {
    xOffset?: number,
    yOffset: number
}


type PropsType = {
    icon?: string,
    sprite?: SpriteType
}

export default function Icon({ icon, sprite }: PropsType) {

    if (sprite) {
        return <div style={{
            backgroundPositionX: sprite.xOffset ?? 0,
            backgroundPositionY: sprite.yOffset
        }}
            className="icon"></div>
    } else {
        return <img src={icon} className="icon"></img>
    }

}