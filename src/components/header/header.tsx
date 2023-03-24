import "./header.scss"
import Logo from "../logo/logo"
import Search from "./search/search"
import ProductComparison from "./productComparison/productComparison"
import ProductCart from "./productCart/productCart"
import PhoneNumbers from "../phoneNumbers/phoneNumbers"
import SubHeader from "./subHeader/subHeader"
import TimeTable from "./timetable/timetable"

export default function Header() {
    return <header className="header-wrapper">
        <SubHeader />
        <div className="header">
            <PhoneNumbers />
            <Logo />
            <TimeTable />
            <Search />
            <ProductComparison />
            <ProductCart />
        </div>
    </header>
}


