import "./advertisingBanner.scss";

type PropsType = {
    imageSrc:any,
    href: string,
}

export default function AdvertisingBanner({imageSrc,href}:PropsType) {
    return <a href={href} className="advertising-banner">
        <img src={imageSrc} alt="" />
    </a>
}