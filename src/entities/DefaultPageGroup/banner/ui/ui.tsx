import "./styles.scss";
import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import {  useStore } from "../../../../shared/lib/hooks";
import { Banner } from "../../../../shared/ui/banner";
import { DefaultPageStoreType } from "../../../../pages/defaultPage";
import { observer } from "mobx-react";

type PropsType = {

}

export const DefaultPageBanner = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStoreType>(state => state.defaultPage);

    useEffect(() => {
        state.loadAdvertisingBanner()
    }, [state])

    if (!state.advertisingBanner) {
        return <Loading />
    }

    return <Banner banner={state.advertisingBanner} />
})