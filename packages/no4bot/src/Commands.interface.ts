import { OnMessage } from "./OnMessage.type";

export interface Commands {
    [name: string]: OnMessage
}