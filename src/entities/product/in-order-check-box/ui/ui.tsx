import "./styles.scss";
import {Field} from "formik";

type PropsType = {
    value: boolean
}

export function InOrderCheckBox({value}: PropsType) {
    const isActive = value;

    return <label className={`in-order-checkbox-wrapper ${isActive ? "active" : ""}`}>
        <Field className="checkbox-real" type="checkbox" name="inOrder"/>
        <div className="checkbox">
            <div className="checkbox-point"></div>
        </div>
        <span className="checkbox__title">В наличии</span>
    </label>
}