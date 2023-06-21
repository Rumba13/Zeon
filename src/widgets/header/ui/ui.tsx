import "./styles.scss";
import { TimeTable } from "../../../entities/timeTable";
import { SubHeader } from "../../subHeader";
import { Search } from "../search";
import { PhoneNumbersLowWidth } from "../../../entities/phoneNumbersLowWidth";
import { PhoneNumbers } from "../../../entities/phoneNumbers";
import { Logo } from "../../../shared/ui/logo";
import { ShoppingCart } from "../../../entities/productCart";
import { ComparisonCart } from "../../../entities/comparisonCart";

export function Header() {
    return <header className="header-wrapper">
        <SubHeader />
        <div className="header">
            <PhoneNumbers />
            <Logo />
            <TimeTable />
            <PhoneNumbersLowWidth />
            <Search />
            <ComparisonCart />
            <ShoppingCart />
        </div>
    </header>
}


