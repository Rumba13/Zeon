import "./socialNetwork.css";

type PropsType = {
    link:string,
    icon:string
}

export default function SocialNetwork({link, icon}:PropsType) {
    return <div className="social-network-wrapper">
        <a href={link} className="social-network-link">
            {/* <img src={icon} alt="" /> */} 0
        </a>
    </div>
}