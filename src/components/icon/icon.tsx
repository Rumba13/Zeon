import "./icon.scss";



type PropsType = {
    icon: string
}

export default function Icon({ icon }: PropsType) {
        return <img src={icon} className="icon"></img>
}