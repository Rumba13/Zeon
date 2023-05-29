import "./header.scss"
import Search from "./search/search"
import PhoneNumbers from "../phoneNumbers/phoneNumbers"
import PhoneNumbersLowWidth from "./phoneNumbersLowWidth/phoneNumbersLowWidth"
import { Logo } from "../../entities/logo"
import { TimeTable } from "../../entities/timeTable"
import { ProductCart } from "../../entities/productCart"
import { ProductComparison } from "../../entities/productComparison"
import { SubHeader } from "../../widgets/subHeader"

export default function Header() {
    return <header className="header-wrapper">
        <SubHeader />
        <div className="header">
            <PhoneNumbers />
            <Logo />
            <TimeTable />
            <PhoneNumbersLowWidth />
            <Search />
            <ProductComparison />
            <ProductCart />
        </div>
    </header>
}


