import "./header.scss"
import Search from "./search/search"
import ProductComparison from "./productComparison/productComparison"
import ProductCart from "./productCart/productCart"
import PhoneNumbers from "../phoneNumbers/phoneNumbers"
import SubHeader from "./subHeader/subHeader"
import PhoneNumbersLowWidth from "./phoneNumbersLowWidth/phoneNumbersLowWidth"
import { Logo } from "../../entities/logo"
import { TimeTable } from "../../entities/timeTable"

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


