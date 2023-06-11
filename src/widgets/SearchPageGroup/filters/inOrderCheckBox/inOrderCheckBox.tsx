import "./inOrderCheckBox.scss";
import { Field } from "formik"; //TODO refuck to fsd

type PropsType = {
    value: boolean
}

export default function InOrderCheckBox({ value }: PropsType) {
    const isActive = value;

    return <label className={`in-order-checkbox-wrapper ${isActive ? "active":""}`}>
        <Field className="checkbox-real" type="checkbox" name="inOrder" />

        <div className="checkbox">
            <div className="checkbox-point"></div>
        </div>

        <span className="checkbox__title">В наличии</span>
    </label>
}