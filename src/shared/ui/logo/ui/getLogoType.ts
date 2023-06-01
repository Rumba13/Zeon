import { ICONS } from "../../../../images/images";

export type LogoColors = "white" | "dark";

export function getLogoType(color: LogoColors): string {
    switch (color) { 
        case "dark":
            return ICONS.darkLogo
        case "white":
            return ICONS.whiteLogo
    }
}