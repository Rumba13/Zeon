import { RootStateContext, RootStateType } from '../../app/store';
import { useContext } from 'react';

export function useStore<SelectedState>(selector: (rootState: RootStateType) => SelectedState): SelectedState {
    const rootState = useContext(RootStateContext);

    return selector(rootState);
} 