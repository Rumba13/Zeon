import whiteLogo from "../../../images/whiteLogo.svg";
import darkLogo from "../../../images/darkLogo.svg";


export type LogoVariant = "white" | "dark";

export function getLogoVariant(color: LogoVariant): string {
    switch (color) {
        case "dark":
            return darkLogo
        case "white":
            return whiteLogo
    }
}