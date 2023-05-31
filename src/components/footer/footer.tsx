import "./footer.scss";
import AboutCompany from "./aboutCompany/aboutCompany";
import AboutStore from "./aboutStore/aboutStore";
import ContactUs from "./contactUs/contactUs";
import CopyrightAndRules from "./copyrightAndRules/copyrightAndRules";
import Disclaimer from "./disclaimer/disclaimer";
import { Logo } from "../../entities/logo";
import { ScrollUp } from "../../features/scrollUp";

export default function Footer() {
    return <div className="footer-wrapper">
            <ScrollUp />
        <footer className="footer">
            <Logo color="white" />
            <AboutCompany />
            <AboutStore />
            <ContactUs />
            <CopyrightAndRules />    
            <Disclaimer />
        </footer>
    </div>
}   