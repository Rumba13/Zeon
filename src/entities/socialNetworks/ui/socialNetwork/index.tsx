import "./styles.scss";

type PropsType = {
    link:string,
    icon:React.ReactNode
}

export function SocialNetwork({link, icon}:PropsType) {
    return <a href={link} className="social-network">{icon}</a>
}