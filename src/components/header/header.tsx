import "./header.css"
import Logo from "../logo/logo"
import Timetable from "../timetable/timetable"
import Searchfield from "../searchfield/searchfield"
import Comparison from "../comparison/comparison"
import Cart from "../cart/cart"
import PhoneNumbers from "../phoneNumbers/phoneNumbers"

export default function Header() {
    return <header>
        <div className="header-container">
            <PhoneNumbers />
            <Logo />
            <Timetable />
            <Searchfield />
            <Comparison />
            <Cart />
        </div>
    </header>
}


