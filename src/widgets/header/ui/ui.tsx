import "./styles.scss"
import { TimeTable } from "../../../entities/timeTable"
import { ProductComparison } from "../../../entities/productComparison"
import { SubHeader } from "../../subHeader"
import { Search } from "../search"
import { PhoneNumbersLowWidth } from "../../../entities/phoneNumbersLowWidth"
import { PhoneNumbers } from "../../../entities/phoneNumbers"
import { Logo } from "../../../shared/ui/logo"
import { ShoppingCart } from "../../../entities/productCart"

export function Header() {//TODO layout
    return <header className="header-wrapper">
        <SubHeader />
        <div className="header">
            <PhoneNumbers />
            <Logo />
            <TimeTable />
            <PhoneNumbersLowWidth />
            <Search />
            <ProductComparison />
            <ShoppingCart />
        </div>
    </header>
}


