import { ICONS } from "../../../../images/images";

export type LogoVariant = "white" | "dark";

export function getLogoType(color: LogoVariant): string {
    switch (color) { 
        case "dark":
            return ICONS.darkLogo
        case "white":
            return ICONS.whiteLogo
    }
}