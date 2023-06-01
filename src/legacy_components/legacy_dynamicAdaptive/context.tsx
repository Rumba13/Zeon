import { createContext } from "react";

type DynamicAdaptiveRecordsType = {
    moveTo: string,
    id: number,
    content: JSX.Element | JSX.Element[]
};

type PropsType = {
    children: React.ReactNode
}

class ContextController {
    constructor() { }
    public records: DynamicAdaptiveRecordsType[] = []

    public findAll(moveTo: string) {
        return this.records.filter(record => record.moveTo === moveTo) || [];
    }
    public addRecord(record: DynamicAdaptiveRecordsType) {
        if (!this.isRecordExists(record.id)) {
            this.records.push(record);
            this.id++;
        }
    }
    public removeRecord(moveTo: string) {
        this.records = this.records.filter(record => record.moveTo !== moveTo)
    }
    public isRecordExists(id: number) {
        return this.records.find(record => record.id === id);
    }
    public id: number = 1;
}

const contextController = new ContextController();

export const DynamicAdaptiveContext = createContext<ContextController>(contextController);

export default function DynamicAdaptiveContextComponent({ children }: PropsType) {
    return <DynamicAdaptiveContext.Provider value={contextController}>
        {children}
    </DynamicAdaptiveContext.Provider>
}