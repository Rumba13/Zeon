import "./styles.scss"
import { TimeTable } from "../../../entities/timeTable"
import { ProductCart } from "../../../entities/productCart"
import { ProductComparison } from "../../../entities/productComparison"
import { SubHeader } from "../../subHeader"
import { Search } from "../search"
import { PhoneNumbersLowWidth } from "../../../entities/phoneNumbersLowWidth"
import { PhoneNumbers } from "../../../entities/phoneNumbers"
import { Logo } from "../../../shared/logo"

export function Header() {
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


