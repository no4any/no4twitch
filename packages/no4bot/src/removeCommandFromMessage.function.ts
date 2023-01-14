export const removeCommandFromMessage = async (command: string, message: string): Promise<string> => {
    if(!message.startsWith(command)) {
        throw new Error(`Message doesn't start with Command <${command}>`)
    }

    return message.substring(command.length);
}