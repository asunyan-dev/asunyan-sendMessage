import { Client, Message, MessageCreateOptions } from "discord.js";

export function sendMessage(
    client: Client,
    guildId: string,
    channelId: string,
    data: string | MessageCreateOptions
): Promise<Message>;