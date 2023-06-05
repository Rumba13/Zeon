import "./styles.scss";
import { BreadCrumb, BreadCrumbType } from "./breadCrumb";

type PropsType = {
    breadCrumbs:BreadCrumbType[]
}

export function BreadCrumbs({ breadCrumbs}: PropsType) {
    return <div className="bread-crumbs">
        {breadCrumbs.map(({ title, href }, index, crumbs) =>
            <BreadCrumb to={href} isLast={index === crumbs.length - 1}>{title}</BreadCrumb>
        )}
    </div>
}