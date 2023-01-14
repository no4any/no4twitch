import { ChatUserstate } from "tmi.js";
import { Commander } from "./Commander.class";

export const COMMANDER: Commander = new Commander({
    ":list": (channel: string, userstate: ChatUserstate, message: string, self: boolean, pureMessage: string) => {
        console.log("List command called", channel, userstate, message, self, pureMessage)
    },
    ":demo": (channel: string, userstate: ChatUserstate, message: string, self: boolean, pureMessage: string) => {
        console.log("Demo command called", channel, userstate, message, self, pureMessage)
    },
});