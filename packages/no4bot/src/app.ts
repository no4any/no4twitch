import { Client as TwitchClient } from "tmi.js";

const twitchClient = new TwitchClient({
    options: {
        debug: true
    },
    channels: ["no4any"]
})

twitchClient.connect().catch(console.error);
twitchClient.on('message', (channel, tags, message, self) => {
    if (self) return;
    console.log(channel, tags, message, self);
});