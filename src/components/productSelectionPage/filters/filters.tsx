import "./filters.scss";
import ArrowRadioButton from "./arrowRadioButton/arrowRadioButton";
import { Formik } from "formik";
import { useState } from "react";

type SortType = "asc" | "desc";

export default function Filters() {
    const [activeSortType, setActiveSortType] = useState<SortType>("asc");

    function setSortTypeFromArrowValue(arrowValue: boolean) {
        if (arrowValue) {
            setActiveSortType("asc")
        }
        else {
            setActiveSortType("desc")
        }
    }


    return <div className="filters">
        <Formik
            initialValues={{ filter: "Популярность" }}
            onSubmit={() => { }}
        >
            {({ values }) =>
                <>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter" >По цене</ArrowRadioButton>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter" >Название</ArrowRadioButton>
                    <ArrowRadioButton setArrowValue={setSortTypeFromArrowValue} currentFilter={values.filter} radioGroup="filter">Популярность</ArrowRadioButton>
                </>
            }
        </Formik>
    </div>
}