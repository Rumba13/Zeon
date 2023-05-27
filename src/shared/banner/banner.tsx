import "./banner.scss";

type PropsType = {
    img:any,
    href: string,
}

export default function Banner({img,href}:PropsType) {
    return <a href={href} className="banner">
        <img src={img} alt="" />
    </a>
}