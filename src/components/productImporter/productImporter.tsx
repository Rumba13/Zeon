import "./productImporter.scss";

type PropsType = {
    text:string
}

export default function ProductImporter({text}:PropsType) {
    return <span className="product-importer__text">{text}</span>
}