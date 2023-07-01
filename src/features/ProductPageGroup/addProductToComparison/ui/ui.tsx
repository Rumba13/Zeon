import "./styles.scss"
import { SecondaryProductButton } from "../../../../shared/ui//secondaryProductButton"
import { Sprite } from "../../../../shared/ui/sprite";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";

type PropsType = {
    id: number,
    variant?: VariantType
}

type VariantType = "mini" | "full";

export const AddProductToComparison = observer(({ variant, id }: PropsType) => { //TODO refuck //TODO Fullstate
    const addProductToComparison = useStore(state => state.comparisonCart.addProduct);

    if (variant === "mini") {
        return <SecondaryProductButton className="comparison-button" onClick={() => addProductToComparison(id)} >
            <Sprite yOffset={-124} />
            <span className="comparison-button__text">Сравнить</span>
        </SecondaryProductButton>
    }
    else {
        return <SecondaryProductButton className="comparison-button" onClick={() => addProductToComparison(id)} >
            <span className="comparison-button__text">Добавить к сравнению</span>
        </SecondaryProductButton>
    }
})