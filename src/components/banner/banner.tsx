import "./banner.scss";

type PropsType = {
    imageSrc:any,
    href: string,
}

export default function Banner({imageSrc,href}:PropsType) {
    return <a href={href} className="banner">
        <img src={imageSrc} alt="" />
    </a>
}