import "./styles.scss";
import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import {  useStore } from "../../../../shared/lib/hooks";
import { Banner } from "../../../../shared/ui/banner";
import { DefaultPageStateType } from "../../../../pages/defaultPage";
import { observer } from "mobx-react";

type PropsType = {

}

export const DefaultPageBanner = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStateType>(state => state.defaultPage);

    useEffect(() => {
        state.loadAdvertisingBanner()
    }, [state])

    if (!state.advertisingBanner) {
        return <Loading />
    }

    return <Banner banner={state.advertisingBanner} />
})