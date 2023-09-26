import "./styles.scss";
import { Search } from "../search";
import { PhoneNumbersLowWidth } from "../../../entities/phoneNumbersLowWidth";
import { Logo } from "../../../shared/ui/logo/ui";
import { ComparisonCart } from "../../../features/product/comparison-cart";
import { PhoneNumbers } from "../../../entities/phone-numbers";
import { ShoppingCart } from "../../../entities/product-cart";
import { TimeTable } from "../../../entities/time-table";
import { SubHeader } from "../../sub-header";

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


