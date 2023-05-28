import "./productTitle.scss";

type PropsType = {
    title: string,
    id: number
}

export default function ProductTitle({ title, id }: PropsType) {
    return <div className="product-title">
        <span className="product-title__title">{title}</span>
        <span className="product-title__code">Код:{id}</span>
    </div>
}