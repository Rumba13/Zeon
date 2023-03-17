import React, { Children, ReactNode } from "react";
import "./tabContent.scss";

type PropsType = {
    children: ReactNode[] | ReactNode
}

export default function TabContent({children}:PropsType) {
        return <>{children}</>
}