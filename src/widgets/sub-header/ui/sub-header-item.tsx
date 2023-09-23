import "./styles.scss";
import React from "react";

type PropsType = {
    children: React.ReactNode,
    href: string,
    className?: string
}

export function SubHeaderItem({ href, children, className }: PropsType) {
    return <li className={`sub-header-menu-item ${className ?? ""}`}>
        <a href={href} className="item__text">
            {children}
        </a>
    </li>
}