import "./productSelection.scss";

type PropsType = {
    title: string,
    href: string,
    imageSrc: string
}

export default function ProductSelection({ href, imageSrc, title }: PropsType) {
    return <div className="product-selection">
        <a href={href} className="product-selection__title">{title}</a>
        <a href={href} className="product-selection-image-wrapper">
            <img className="image-wrapper__image" src={imageSrc} alt="" />
        </a>
    </div>
}