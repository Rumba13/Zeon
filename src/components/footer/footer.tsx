import "./footer.scss";
import ScrollUp from "../scrollUp/scrollUp";
import Logo from "../logo/logo";
import AboutCompany from "./aboutCompany/aboutCompany";
import AboutStore from "./aboutStore/aboutStore";
import ContactUs from "./contactUs/contactUs";
import CopyrightAndRules from "./copyrightAndRules/copyrightAndRules";
import Disclaimer from "./disclaimer/disclaimer";

export default function Footer() {
    return <div className="footer-wrapper">
            <ScrollUp />
        <footer className="footer">
            <Logo color="White" />
            <AboutCompany />
            <AboutStore />
            <ContactUs />
            <CopyrightAndRules />
            <Disclaimer />
        </footer>
    </div>
}   