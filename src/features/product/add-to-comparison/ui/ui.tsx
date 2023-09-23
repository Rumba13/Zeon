import "./styles.scss"
import { Sprite } from "../../../../shared/ui/sprite";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";
import { SecondaryButton } from "../../../../shared/ui/secondary-button";

type PropsType = {
    id: number,
    variant?: VariantType
}

type VariantType = "mini" | "full";

export const AddProductToComparison = observer(({ variant, id }: PropsType) => {
    const addProductToComparison = useStore(state => state.comparisonCart.addProduct);

    if (variant === "mini") {
        return <SecondaryButton className="comparison-button" onClick={() => addProductToComparison(id)} >
            <Sprite yOffset={-124} />
            <span className="comparison-button__text">Сравнить</span>
        </SecondaryButton>
    }
    else {
        return <SecondaryButton className="comparison-button" onClick={() => addProductToComparison(id)} >
            <span className="comparison-button__text">Добавить к сравнению</span>
        </SecondaryButton>
    }
})