import { ChatUserstate } from "tmi.js"
import { Commands } from "./Commands.interface";
import { removeCommandFromMessage } from "./removeCommandFromMessage.function";

export class Commander {
    private keys: string[];
    constructor(private commands: Commands) {
        this.message = this.message.bind(this);
        this.keys = Object.keys(commands);
    }

    async message(channel: string, userstate: ChatUserstate, message: string, self: boolean): Promise<void> {
        this.keys.forEach(async (command: string) => {
            if (message.startsWith(command)) {
                this.commands[command](channel, userstate, message, self, await removeCommandFromMessage(command, message))
            }
        })
        return;
    }
}