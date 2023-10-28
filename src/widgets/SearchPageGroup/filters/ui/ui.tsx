import "./styles.scss";
import { Formik } from "formik";
import { InOrderCheckBox } from "../../../../entities/product/in-order-check-box";
import { useStore } from "../../../../shared/lib/use-store";
import { observer } from "mobx-react";
import { ArrowRadioButton } from "../../../../shared/ui/arrow-radio-button";

export const SearchFilters = observer(() => {
    const { sortBy, setSortBy, setSortType } = useStore(state => state.searchPage);

    function setSortTypeFromArrowState(arrowValue: boolean) {
        if (arrowValue) {
            setSortType("asc")
        }
        else {
            setSortType("desc")
        }
    }

    return <div className="filters">
        <Formik
            initialValues={{ filter: "Популярность", inOrder: false }}
            onSubmit={() => { }}
        >
            {({ values }) =>
                <>
                    <ArrowRadioButton radioGroup="filter" value="price" setSortBy={setSortBy} setCurrentIsArrowUp={setSortTypeFromArrowState} currentValue={sortBy}  >По цене</ArrowRadioButton>
                    <ArrowRadioButton radioGroup="filter" value="name" setSortBy={setSortBy} setCurrentIsArrowUp={setSortTypeFromArrowState} currentValue={sortBy}  >Название</ArrowRadioButton>
                    <ArrowRadioButton radioGroup="filter" value="popularity" setSortBy={setSortBy} setCurrentIsArrowUp={setSortTypeFromArrowState} currentValue={sortBy} >Популярность</ArrowRadioButton>

                    <InOrderCheckBox value={values.inOrder} />
                </>
            }
        </Formik>
    </div>
})