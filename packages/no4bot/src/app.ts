import { Client as TwitchClient } from "tmi.js";
import { COMMANDER } from "./CommanderConfig.config";

const twitchClient = new TwitchClient({
    options: {
        debug: true
    },
    channels: ["no4any"]
})

twitchClient.connect().catch(console.error);

twitchClient.on('message', COMMANDER.message);