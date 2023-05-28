import "./socialNetwork.scss";

type PropsType = {
    link:string,
    icon:React.ReactNode
}

export default function SocialNetwork({link, icon}:PropsType) {
    return <a href={link} className="social-network">{icon}</a>
}