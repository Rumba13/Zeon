import "./socialNetwork.css";

type PropsType = {
    link:string,
    icon:any
}

export default function SocialNetwork({link, icon}:PropsType) {
    return <a href={link} className="social-network">{icon}</a>
}