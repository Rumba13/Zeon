import { Field } from "formik";
import { useState } from "react";
import "./radioButton.scss";

type PropsType = {
    children?: React.ReactNode,
    className?: string,
    radioGroup: string,
    title: string,
    onClick?: () => any
}

export default function RadioButton({ children, className, radioGroup, title, onClick }: PropsType) {
    return <label className={`radio-button ${className ?? ""}`}>
        <Field onClick={onClick}  type="radio" name={radioGroup} value={title} hidden/>
        {children}
    </label>
}