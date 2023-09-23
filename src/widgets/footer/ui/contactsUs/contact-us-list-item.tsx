type PropsType = {
    href?:string,
    children:any
}

export function ContactUsListItem({href,children}:PropsType) {
    if(href === undefined) {
        return <li className="contacts-us__list-item">
            <span className="list-title">
                {children}
            </span>
        </li>
    }

    return  <li className="contacts-us__list-item">
        <a className="list-link" href={href}>
            {children}
        </a>
    </li>
}
