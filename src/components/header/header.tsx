import "./header.scss"
import Logo from "../logo/logo"
import Timetable from "./timetable/timetable"
import SearchForm from "./searchForm/searchForm"
import Comparison from "./comparison/comparison"
import Cart from "./cart/cart"
import PhoneNumbers from "../phoneNumbers/phoneNumbers"
import Subheader from "./subHeader/subHeader"

export default function Header() {
    return <header className="header">
        <Subheader />
        <div className="header-container">
            <PhoneNumbers />
            <Logo />
            <Timetable />
            <SearchForm />
            <Comparison />
            <Cart />
        </div>
    </header>
}


