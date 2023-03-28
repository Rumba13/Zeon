import "./checkBox.scss";
import { Field } from "formik";

type PropsType = {
    name:string,
    title:string
}

export default function CheckBox({name,title}:PropsType) {
    return (
        <label className="checkbox">
            <Field type="checkbox" name={name} value={title}/>
            <span className="checkbox__title">{title}</span>
        </label>
    )
}