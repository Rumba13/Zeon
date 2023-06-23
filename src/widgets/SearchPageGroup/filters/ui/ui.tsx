import "./styles.scss";
import { Formik } from "formik";
import { InOrderCheckBox } from "../inOrderCheckBox";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";
import { ArrowRadioButton } from "../arrowRadioButton";

export const Filters = observer(() => {
    const { sortBy, setSortBy, setSortType } = useStore(state => state.searchPage);

    function setSortTypeFromArrowValue(arrowValue: boolean) { 
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
                    <ArrowRadioButton radioGroup="filter" sortBy="price" setSortBy={setSortBy} setStateIsArrowUp={setSortTypeFromArrowValue} currentSortBy={sortBy}  >По цене</ArrowRadioButton>
                    <ArrowRadioButton radioGroup="filter" sortBy="name" setSortBy={setSortBy} setStateIsArrowUp={setSortTypeFromArrowValue} currentSortBy={sortBy}  >Название</ArrowRadioButton>
                    <ArrowRadioButton radioGroup="filter" sortBy="popularity" setSortBy={setSortBy} setStateIsArrowUp={setSortTypeFromArrowValue} currentSortBy={sortBy} >Популярность</ArrowRadioButton>

                    <InOrderCheckBox value={values.inOrder} />
                </>
            }
        </Formik>
    </div>
})