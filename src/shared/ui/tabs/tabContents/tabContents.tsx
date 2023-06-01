import React, { ReactNode } from "react";
import "./tabContents.scss";

type PropsType = {
    children: ReactNode[]
}

export default function TabContents({ children }: PropsType) {
    return <>{children}</>;
}