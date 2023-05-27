import "./paginatorItem.scss";

type PropsType = {
    children: string,
    className?: string,
    isActive?:boolean
}

export default function PaginatorItem({ children:value, className = "",isActive = false }: PropsType) {

    return <li className={`paginator-item ${className} ${isActive ? "active": ""}`}>
        <a className="paginator-item__link" href="#" >{value}</a>
    </li>
}