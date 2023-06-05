import "./styles.scss";
import ArrowRadioButton from "../arrowRadioButton/arrowRadioButton";
import { Formik } from "formik";
import { useState } from "react";
import InOrderCheckBox from "../inOrderCheckBox/inOrderCheckBox";

type SortType = "asc" | "desc";

export function Filters() {
    const [activeSortType, setActiveSortType] = useState<SortType>("asc");

    function setSortTypeFromArrowValue(arrowValue: boolean) { //TODO refuck to global state
        if (arrowValue) {
            setActiveSortType("asc")
        }
        else {
            setActiveSortType("desc")
        }
    }

    return <div className="filters">
        <Formik
            initialValues={{ filter: "Популярность", inOrder: false }}
            onSubmit={() => { }}
        >
            {({ values }) =>
                <>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter" >По цене</ArrowRadioButton>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter" >Название</ArrowRadioButton>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter">Популярность</ArrowRadioButton>

                    <InOrderCheckBox value={values.inOrder} />
                </>
            }
        </Formik>
    </div>
}