import { useState } from "react";


export default function usePopup() {
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>();



    return [isPopupOpened, () => setIsPopupOpened(!isPopupOpened)]
}