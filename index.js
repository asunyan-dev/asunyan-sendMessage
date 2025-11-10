/**
 * Sends a message to a given channel in a guild.
 * @param {import('discord.js').Client} client
 * @param {string} guildId
 * @param {string} channelId
 * @param {string | import('discord.js').MessageCreateOptions} data
 */

async function sendMessage(client, guildId, channelId, data) {
    const guild = await client.guilds.fetch(guildId).catch(() => null);

    if(!guild) throw new Error("Guild not found");

    const channel = await guild.channels.fetch(channelId).catch(() => null);

    if(!channel) throw new Error("Channel not found")

    if(!channel.isSendable() || channel.isDMBased()) throw new Error("Can't send message in that channel");
    
    
    return await channel.send(data);
};


module.exports = { sendMessage };