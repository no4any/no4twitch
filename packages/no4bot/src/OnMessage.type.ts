import { ChatUserstate } from "tmi.js";

export type OnMessage = (channel: string, userstate: ChatUserstate, message: string, self: boolean, pureMessage:string) => void