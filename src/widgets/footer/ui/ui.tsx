import "./styles.scss";
import { ScrollUp } from "../../../features/scrollUp";
import { Logo } from "../../../shared/ui/logo";
import { AboutCompany } from "./aboutCompany";
import { AboutStore } from "./aboutStore";
import { ContactsUs } from "./contactsUs";
import { CopyrightAndRules } from "./copyrightAndRules";
import { Disclaimer } from "./disclaimer";

export function Footer() {
    return <div className="footer-wrapper">
            <ScrollUp />
        <footer className="footer">
            <Logo color="white" />
            <AboutCompany />
            <AboutStore />
            <ContactsUs />
            <CopyrightAndRules />    
            <Disclaimer />
        </footer>
    </div>
}   