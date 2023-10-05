import { SmartCardReturnData } from "./SmartCardReturnData";
export default class ThaiIDCardReader {
    private eventEmitter;
    private readTimeout;
    private insertCardDelay;
    instance: any;
    constructor();
    setReadTimeout(timeout: number): void;
    setInstance(instance: any): void;
    setInsertCardDelay(timeout: number): void;
    onReadComplete(callBack: (data: Partial<SmartCardReturnData>) => void): void;
    onReadError(callBack: (error: string) => void): void;
    init(): void;
}
