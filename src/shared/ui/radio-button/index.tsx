import "./styles.scss";
import { Field } from "formik";

type PropsType = {
    children?: React.ReactNode,
    className?: string,
    radioGroup: string,
    onClick?: () => any
}

export function RadioButton({ children, className, radioGroup, onClick }: PropsType) {
    return <label className={`radio-button ${className ?? ""}`}>
        <Field onClick={onClick}  type="radio" name={radioGroup} value={children} hidden/>
        {children}
    </label>
}