import { useState } from "react"

export default function useTimeTable() {
    const defaultOpenedState = document.body.clientWidth < 600;

    const [isOpened, setIsOpened] = useState(defaultOpenedState);

    const timeTableClassName = isOpened? "opened": "";
    
    return {timeTableClassName, timeTableClickHandler: () => setIsOpened(!isOpened)}
}