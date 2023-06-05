import "./styles.scss";

type PropsType = {
    href:string,
    icon:React.ReactNode
}

export function SocialNetwork({href, icon}:PropsType) {
    return <a href={href} className="social-network">{icon}</a>
}