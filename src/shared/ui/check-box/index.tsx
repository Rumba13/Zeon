import "./checkBox.scss";
import {Field} from "formik";

type PropsType = {
    name: string,
    title: string,
    className: string
}

export function CheckBox({name, title, className}: PropsType) {
    return (
        <label className={`checkbox-wrapper ${className ?? ""}`}>
            <Field className="checkbox" type="checkbox" name={name} value={title}/>
            <span className="checkbox__title">{title}</span>
        </label>
    )
}