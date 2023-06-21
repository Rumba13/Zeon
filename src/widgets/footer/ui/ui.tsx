import "./styles.scss";
import { ScrollUp } from "../../../features/scrollUp";
import { Logo } from "../../../shared/ui/logo";
import { AboutCompany } from "./aboutCompany";
import { AboutStore } from "./aboutStore";
import { ContactsUs } from "./contactsUs";
import { Disclaimer } from "./disclaimer";
import { CopyrightAndRules } from "./copyrightAndRules";

export function Footer() {
    return <div className="footer-wrapper">
            <ScrollUp />
        <footer className="footer">
            <Logo variant="white" />
            <AboutCompany />
            <AboutStore />
            <ContactsUs />
            <CopyrightAndRules />    
            <Disclaimer />
        </footer>
    </div>
}   