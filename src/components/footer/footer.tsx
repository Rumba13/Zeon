import AboutCompany from "./aboutCompany/aboutCompany"
import Contacts from "./contacts/contacts"
import Disclaimer from "./disclaimer/disclaimer"
import FooterMiddle from "./footerMiddle/footerMiddle"
import Logo from "../logo/logo"
import MagazineInformation from "./magazineInformation/magazineInformation"
import ScrollTop from "../scrollTop/scrollTop"
import "./footer.scss"

export default function Footer() {
    return <div className="footer-wrapper">
            <ScrollTop />
        <footer className="footer">
            <Logo color="White" />
            <AboutCompany />
            <MagazineInformation />
            <Contacts />
            <FooterMiddle />
            <Disclaimer />
        </footer>
    </div>
}   