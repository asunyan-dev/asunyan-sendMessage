# asunyan-sendmessage

A simple module to send messages with discord.js to a specified channel in a specified guild.

## Install

```bash
$ npm install asunyan-sendmessage
```

## Usage

```js
const { sendMessage } = require('asunyan-sendmessage');

const message = await sendMessage(client, guildId, channelId, data).catch((err) => console.error(err));

``` 

`data` can be either a string or any message create options. Example: 
```js
const message = await sendMessage(client, guildId, channelId, { embeds: [embed] }).catch((err) => console.error(err));
```

