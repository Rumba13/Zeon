import "./styles.scss"
import { SecondaryProductButton } from "../../../../shared/secondaryProductButton"

type PropsType = {
    id: number,
}

export function AddProductToComparison({ id }: PropsType) {
    return <SecondaryProductButton >
        <span className="comparison-button__text">Добавить к сравнению</span>
    </SecondaryProductButton>
}