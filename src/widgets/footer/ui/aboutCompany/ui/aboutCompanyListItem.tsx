type PropsType = {
    href:string,
    children:any
}


export function AboutCompanyListItem({href, children}:PropsType) {
    return <li className="about-company__list-item">
        <a className="list-item__link" href={href}>{children}</a>
    </li>
}