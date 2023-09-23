type PropsType = {
    children:any,
    href:string
}

export function AboutStoreListItem({href,children}:PropsType) {
    return <li className="about-store__list-item">
        <a className="list-item__link" href={href}>{children}</a>
    </li>
}