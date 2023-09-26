import "./styles.scss";
import { Logo } from "../../../shared/ui/logo/ui";
import { AboutCompany } from "./aboutCompany";
import { Disclaimer } from "./disclaimer";
import { CopyrightAndRules } from "./copyrightAndRules";
import { ScrollUp } from "../../../shared/ui/scroll-up";
import {ContactsUs} from "./contactsUs";
import {AboutStore} from "./aboutStore";

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