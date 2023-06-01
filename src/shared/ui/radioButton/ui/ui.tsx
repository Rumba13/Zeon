import "./styles.scss";
import { Field } from "formik";
import { useState } from "react";

type PropsType = {
    children?: React.ReactNode,
    className?: string,
    radioGroup: string,
    title: string,
    onClick?: () => any
}

export function RadioButton({ children, className, radioGroup, title, onClick }: PropsType) {
    return <label className={`radio-button ${className ?? ""}`}>
        <Field onClick={onClick}  type="radio" name={radioGroup} value={title} hidden/>
        {children}
    </label>
}