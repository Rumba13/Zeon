import "./productTitle.scss";

type PropsType = {
    title: string,
    code: number
}

export default function ProductTitle({ title, code }: PropsType) {
    return <div className="product-title">
        <span className="product-title__title">{title}</span>
        <span className="product-title__code">Код:{code}</span>
    </div>
}