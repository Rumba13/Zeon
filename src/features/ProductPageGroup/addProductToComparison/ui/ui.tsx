import "./styles.scss"
import { SecondaryProductButton } from "../../../../shared/ui//secondaryProductButton"
import { Sprite } from "../../../../shared/ui/sprite";

type PropsType = {
    id: number,
    variant?: VariantType
}

type VariantType = "mini" | "full";

export function AddProductToComparison({ variant, id }: PropsType) { //TODO refuck

    if (variant === "mini") {
        return <SecondaryProductButton className="comparison-button" >
            <Sprite yOffset={-124} />
            <span className="comparison-button__text">Сравнить</span>
        </SecondaryProductButton>
    }
    else {
        return <SecondaryProductButton className="comparison-button" >
            <span className="comparison-button__text">Добавить к сравнению</span>
        </SecondaryProductButton>
    }
}