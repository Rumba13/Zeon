import "./advertisingBanner.scss";

type PropsType = {
    img: string,
    href: string,
}

export default function AdvertisingBanner({ img, href }: PropsType) {
    return <a href={href} className="advertising-banner">
        <img src={img} alt="" />
    </a>
}