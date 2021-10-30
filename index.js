const aoibot = require("aoi.js")
const bot = new aoibot.Bot({
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]", process.env.PREFIX],
  mobile: true
})

bot.botJoinCommand({
channel: "$randomChannelID",
code: `$channelSendMessage[836301327200944169;{title:$getServerInvite}
{description:Server Name: $serverName
Server ID: $guildID}
{color:GREEN}
{footer:$username[$clientID] Logs}]
$description[Hey! I'm $username[$clientID], my prefix is ox! (default), i'm a simple bot created by the user $userTag[776317504053837826]
I have:
__**Moderation**__
__**Information Commands**__
__**Music**__
__**Utility Commands**__]
$color[PURPLE]
$addTimestamp
$footer[$username[$clientID];$userAvatar[$clientID]]
`
})
bot.onGuildJoin()

bot.botLeaveCommand({
channel: "836301327200944169",
code: `$title[Server Removed]
$description[I've been removed from $serverName]
$color[ff0000]
$addTimestamp
$footer[$username[$clientID] Logs;$userAvatar[$clientID]]
`
})
bot.onGuildLeave()

bot.musicStartCommand({ 
channel: "$channelID", 
code: `$title[Play]
$thumbnail[$songInfo[thumbnail]]
$description[Now Playing: **[$songInfo[title]]($songInfo[url])**]
$color[$getRoleColor[$highestRole[$clientID]]]
$author[$username[$clientID] Music;$userAvatar[$clientID]]
$replaceText[$replaceText[$checkCondition[$pruneMusic==true];true; ;-1];false; ;-1]
` 
})
/*
$channelID is where the play song command was executed
*/

bot.musicEndCommand({
channel: "$channelID",
code: `$title[Oops...]
$description[**I think there are no songs in the queue (Or Users in the Voice Chat) anymore, so I'm leaving the voice channel.**]
$color[FF0000]
`
})

bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
} 
}

bot.command({
name: "jumbo",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[Download the $emoji[$resolveEmojiID[$message[1]];name] Emoji;$emoji[$resolveEmojiID[$message[1]];url]]
$description[Preview:
$message[1]

Emoji ID:
\`\`\`
$resolveEmojiID[$message[1]]
\`\`\`

Large Emoji ID:
\`\`\`
$message[1]
\`\`\`]
$color[$getRoleColor[$highestRole[$authorID]]]
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]].$replaceText[$replaceText[$checkCondition[$stringStartsWith[$message[1];<a]==true];true;gif;-1];false;png;-1]?v=1]
$argsCheck[1;Put an emoji!]
$suppressErrors[You typed a Default Discord emoji? Those emojis Doesn't work.]

$else

$title[Descarga el emoji $emoji[$resolveEmojiID[$message[1]];name];$emoji[$resolveEmojiID[$message[1]];url]]
$description[Vista Previa:
$message[1]

ID del Emoji:
\`\`\`
$resolveEmojiID[$message[1]]
\`\`\`

ID Larga del Emoji:
\`\`\`
$message[1]
\`\`\`]
$color[$getRoleColor[$highestRole[$authorID]]]
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]].$replaceText[$replaceText[$checkCondition[$stringStartsWith[$message[1];<a]==true];true;gif;-1];false;png;-1]?v=1]
$argsCheck[1;Pon un emoji!]
$suppressErrors[Has escrito un emoji por defecto? Esos emojis no funcionan.]

$endif
`
})

//Awaited Commands Only

bot.awaitedCommand({
name: "español",
code: `$editIn[5s;{description:<a:loading:852797831281508413> Wait 5 seconds more...}{color:$getRoleColor[$highestRole[$authorID]]};
{color:$getRoleColor[$highestRole[$authorID]]}
{description:✅ | Idioma establecido en Español correctamente.}]
$setGlobalUserVar[idioma;Español]
$deleteMessage[$channelID;$message[1]]
$suppressErrors[ ]
$description[<a:loading:852797831281508413> Updating the language...]
$color[$getRoleColor[$highestRole[$authorID]]]
`
})

bot.awaitedCommand({
name: "english",
code: `
$editIn[5s;{description:<a:loading:852797831281508413> Espere 5 segundos mas...}
{color:$getRoleColor[$highestRole[$authorID]]};
{color:$getRoleColor[$highestRole[$authorID]]}
{description:✅ | Language has been set to english successfully}]
$setGlobalUserVar[idioma;Ingles]
$deleteMessage[$channelID;$message[1]]
$suppressErrors[ ]
$description[<a:loading:852797831281508413> Actualizando el idioma...]
$color[$getRoleColor[$highestRole[$authorID]]]
`
})

//Awaited Commands Only

bot.command({
name: "<@!817158072232706108>",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[$replaceText[$replaceText[$checkCondition[$day/$month/$year==25/December/$year];true;🎅 Ho Ho Ho $username!;-1];false;Hello $username;-1]]
$description[I'm $username[$clientID], for my command list, use $getServerVar[prefix]help]

$color[$replaceText[$replaceText[$checkCondition[$day/$month/$year==25/December/$year];true;$randomText[FF0000;WHITE];-1];false;$getRoleColor[$highestRole[$authorID]];-1]]

$else

$title[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;🎅 Jo Jo Jo $username!;-1];false;Hola $username;-1]]
$description[Soy $username[$clientID], para mi lista de comandos, usa $getServerVar[prefix]help]

$color[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;$randomText[FF0000;WHITE];-1];false;$getRoleColor[$highestRole[$authorID]];-1]]

$endif
`,
nonPrefixed: true
})

bot.command({
name: "<@817158072232706108>",
code: `
$if[$getGlobalUserVar[idioma]==Ingles]

$title[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;🎅 Ho Ho Ho $username!;-1];false;Hello $username;-1]]
$description[I'm $username[$clientID], for my command list, use $getServerVar[prefix]help]

$color[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;$randomText[FF0000;WHITE];-1];false;$getRoleColor[$highestRole[$authorID]];-1]]

$else

$title[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;🎅 Jo Jo Jo $username!;-1];false;Hola $username;-1]]
$description[Soy $username[$clientID], para mi lista de comandos, usa $getServerVar[prefix]help]

$color[$replaceText[$replaceText[$checkCondition[$date==12/25/$year];true;$randomText[FF0000;WHITE];-1];false;$getRoleColor[$highestRole[$authorID]];-1]]

$endif
`,
nonPrefixed: true
})

bot.variables({
  idioma: "Ingles",
  prefix: "ox!",
  Sugchannel: "0",
  version: "21.3w21.31",
  user_message: "undefinied",
  user_ID: ""
})

bot.onMessageDelete()
bot.deletedCommand({
channel: "$channelID",
code: `
$setChannelVar[user_message;$message]
$setChannelVar[user_ID;$authorID]
`
});

bot.command({
 name: "snipe",
 code: `
$author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
$addTimestamp
$description[
$getChannelVar[user_message]
]
$color[$getRoleColor[$highestRole[$getChannelVar[user_ID]]]]
$onlyIf[$getChannelVar[user_message]!=undefinied;{description:I didn't found the deleted message!}{color:$getRoleColor[$highestRole[$authorID]]}]
`
})

bot.command({
name: "leave-sv",
code: `$botLeave[$message[1]]
$onlyForIDs[776317504053837826; ]
$serverName
No vimo gile conchetumareeeeee
$dm[$authorID]
`
})

bot.status({
  text: "https://pfasupport.glitch.me",
  type: "WATCHING",
  time: 30
})

bot.status({
  text: "Energy Assault in Roblox",
  type: "PLAYING",
  time: 30
})

bot.status({
  text: "Spotify",
  type: "LISTENING",
  time: 30
})

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://PFA-Support-host.pfaprogramer.repl.co',
    title: 'Principal',
    interval: 30 //minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} = Actualmente Encendido ✅`));
monitor.on('down', (res) => console.log(`${res.website} = Actualmente Caido ❌`));
monitor.on('stop', (website) => console.log(`${website} = Actualmente En Pausa ▶️`) );
monitor.on('error', (error) => console.log(error));

bot.command({
name: "help",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$author[$username[$clientID];$userAvatar[$clientID]]
$title[Help Command List: ]
$description[:pager: **| __COMMANDS__ |** :pager:
> \`For this just type $getServerVar[prefix]help-commands\`

:key: **| __OTHER__ |** :key:
> \`For this just type $getServerVar[prefix]help-other\`

:gear: **| __CONFIG__ |** :gear:
> \`For this just type $getServerVar[prefix]help-config\`

:globe_with_meridians: **| __SUPPORT__ |** :globe_with_meridians:
> \`For this just type $getServerVar[prefix]help-support\`

**About Me: \`$getServerVar[prefix]about\`**]
$color[$getRoleColor[$highestRole[$authorID]]]
$footer[Requested by $userTag;$authorAvatar]

$else

$author[$username[$clientID];$userAvatar[$clientID]]
$title[Lista de Comandos de ayuda:]
$description[:pager: **| __COMANDOS__ |** :pager:
> \`Para esto solo escribe $getServerVar[prefix]help-commands\`

:key: **| __OTROS__ |** :key:
> \`Para esto solo escribe $getServerVar[prefix]help-other\`

:gear: **| __CONFIGURACION__ |** :gear:
> \`Para esto solo escribe $getServerVar[prefix]help-config\` 

:globe_with_meridians: **| __SOPORTE__ |** :globe_with_meridians:
> \`Para esto solo escribe $getServerVar[prefix]help-support\` 

**Sobre Mi: \`$getServerVar[prefix]about\`**] 
$color[$getRoleColor[$highestRole[$authorID]]]
$footer[Pedido por $userTag;$authorAvatar]

$endif
`
})
 
bot.command({
name: "help-commands",
aliases: ["commands", "cmds"],
code: `
$if[$getGlobalUserVar[idioma;$authorID]==Ingles]

$author[$username[$clientID];$userAvatar[$clientID]]
$title[Use a command]
$description[
Commands:
:tools: **| __UTILITY__ |** :tools:
> \`$getServerVar[prefix]invite, $getServerVar[prefix]report, $getServerVar[prefix]set-sugchannel, $getServerVar[prefix]suggestion, $getServerVar[prefix]google-search, $getServerVar[prefix]snipe, $getServerVar[prefix]global-chat\`

<:info:855521077585117205> **| __INFO__ |** <:info:855521077585117205>
> \`$getServerVar[prefix]bot-info, $getServerVar[prefix]user-info, $getServerVar[prefix]role-info, $getServerVar[prefix]server-info, $getServerVar[prefix]command-info, $getServerVar[prefix]function-info\`

<a:VeriGif:852748359001440256> **| __ADMIN__ |** <a:VeriGif:852748359001440256>
> \`$getServerVar[prefix]slowmode-on, $getServerVar[prefix]slowmode-off, $getServerVar[prefix]unlock-channel, $getServerVar[prefix]lock-channel, $getServerVar[prefix]ban, $getServerVar[prefix]unban, $getServerVar[prefix]kick, $getServerVar[prefix]clear, $getServerVar[prefix]create-channel, $getServerVar[prefix]create-category, $getServerVar[prefix]nuke, $getServerVar[prefix]create-emoji\`

:musical_note: **| __MUSIC__ |** :musical_note:
> \`$getServerVar[prefix]join, $getServerVar[prefix]leave, $getServerVar[prefix]play, $getServerVar[prefix]stop, $getServerVar[prefix]currentqueue, $getServerVar[prefix]loop, $getServerVar[prefix]loop-track, $getServerVar[prefix]pause, $getServerVar[prefix]song-info, $getServerVar[prefix]resume, $getServerVar[prefix]skip, $getServerVar[prefix]volume\`

:wrench: **| __SERVICES__ |** :wrench:
> \`$getServerVar[prefix]calculator, $getServerVar[prefix]jumbo, $getServerVar[prefix]translate\`
]
$footer[Requested by $userTag;$authorAvatar]
$color[$getRoleColor[$highestRole[$authorID]]]

$else

$author[$username[$clientID] Help;$userAvatar[$clientID]]
$title[Usa alguno de estos comandos]
$description[
Comandos:
:tools: **| __UTILIDAD__ |** :tools:
> \`$getServerVar[prefix]invite, $getServerVar[prefix]report, $getServerVar[prefix]set-sugchannel, $getServerVar[prefix]suggestion, $getServerVar[prefix]google-search, $getServerVar[prefix]snipe, $getServerVar[prefix]global-chat\`

<:info:855521077585117205> **| __INFO__ |** <:info:855521077585117205>
> \`$getServerVar[prefix]bot-info, $getServerVar[prefix]user-info, $getServerVar[prefix]role-info, $getServerVar[prefix]server-info, $getServerVar[prefix]command-info, $getServerVar[prefix]function-info\`

<a:VeriGif:852748359001440256> **| __ADMIN__ |** <a:VeriGif:852748359001440256>
> \`$getServerVar[prefix]slowmode-on, $getServerVar[prefix]slowmode-off, $getServerVar[prefix]unlock-channel, $getServerVar[prefix]lock-channel, $getServerVar[prefix]ban, $getServerVar[prefix]unban, $getServerVar[prefix]kick, $getServerVar[prefix]clear, $getServerVar[prefix]create-channel, $getServerVar[prefix]create-category, $getServerVar[prefix]nuke, $getServerVar[prefix]create-emoji\`

:musical_note: **| __MUSICA__ |** :musical_note:
> \`$getServerVar[prefix]join, $getServerVar[prefix]leave, $getServerVar[prefix]play, $getServerVar[prefix]stop, $getServerVar[prefix]currentqueue, $getServerVar[prefix]loop, $getServerVar[prefix]loop-track, $getServerVar[prefix]pause, $getServerVar[prefix]song-info, $getServerVar[prefix]resume, $getServerVar[prefix]skip, $getServerVar[prefix]volume\`

:wrench: **| __SERVICIOS__ |** :wrench:
> \`$getServerVar[prefix]calculator, $getServerVar[prefix]jumbo, $getServerVar[prefix]translate\`
]
$footer[Pedido por $userTag;$authorAvatar]
$color[$getRoleColor[$highestRole[$authorID]]]

$endif
`
})

bot.command({
name: "help-config",
aliases: ["configuration", "config"],
code: `$if[$getGlobalUserVar[idioma;$authorID]==Ingles]

$author[$username[$clientID] Help;$userAvatar[$clientID]]
$title[Config :]
$description[:exclamation: **| __PREFIX__ |** :exclamation:
> $getServerVar[prefix]prefix
\`Shows my actual Prefix (type prefix-set to set the prefix)\`

:speech_balloon: **| __LANGUAGE__ |** :speech_balloon:
> $getServerVar[prefix]language
\`Shows my actual language (Type language set to set the lang)\`
]
$color[$getRoleColor[$highestRole[$authorID]]]
$footer[Requested by $userTag;$authorAvatar]

$else

$author[$username[$clientID] Help;$userAvatar[$clientID]]
$title[Configuracion :]
$description[:grey_exclamation: **| __PREFIX__ |** :grey_exclamation:
> $getServerVar[prefix]prefix
\`Muestra mi prefix actual (escribe prefix-set para cambiar el prefix)\`

:speech_balloon: **| __IDIOMA__ |** :speech_balloon:
> $getServerVar[prefix]language
\`Muestra mi idioma actual (escribe language set para elegir el idioma)\`
]
$color[$getRoleColor[$highestRole[$authorID]]]

$footer[Pedido por $userTag;$authorAvatar]

$endif
`
})

bot.command({
name: "help-support",
aliases: "support",
code: `
$if[$getGlobalUserVar[idioma;$authorID]==Ingles]

$title[SUPPORT]
$description[**[Support Server](https://discord.gg/n8JecQgANF)**

Are you searching Support of **Bot Codes**?
You can join to these servers!
> <:BDFD:821527976666464256> [Bot Designer for Discord Official Server](https://discord.gg/JcENFCf)

> <:AOIjs:839489859760029758> [Official Aoi.JS Server](https://discord.gg/umWn2rQypW)
]
$color[$getRoleColor[$highestRole[$authorID]]]

$else

$title[SOPORTE]
$description[**[Servidor de Soporte](https://discord.gg/n8JecQgANF)**

Estas buscando Soporte de **Codigos de Bots**?
¡Te puedes unir a estos servidores!
> <:BDFD:821527976666464256> [Bot Designer for Discord Official Server](https://discord.gg/JcENFCf)

> <:AOIjs:839489859760029758> [Official Aoi.JS Server](https://discord.gg/umWn2rQypW)]
$color[$getRoleColor[$highestRole[$authorID]]]

$endif
`
})

bot.command({
name: "about",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[About $userTag[$clientID]]
$description[
$addField[Principal:;Developer | [$userTag[776317504053837826]]($userAvatar[776317504053837826])
Helper | [$userTag[801241278553653279]]($userAvatar[801241278553653279])
Total Servers 💻 | $serverCount
Total Users :boy_tone1: | $allMembersCount
]
$addField[Ping:;Bot 📌 | \`$pingms\`]
$addField[Version:;Bot Version ✅ | $getVar[version]
Aoi.js Version <:AOIjs:839489859760029758> | v$packageVersion
Node.js Version <:nodejs:841738475728142386> | $nodeVersion]
$addField[RAM and CPU:;CPU | \`$cpu\`
RAM | \`$ram\`]
$addField[Links:;<:PFA_Support:827373027255779379> **[Official Page](https://pfasupport.glitch.me)** | **[Vote for me in TOP.gg](https://top.gg/bot/$clientID/vote)** | **[Support Server](https://discord.gg/JAHT6yczuZ
)** | **[Give me a Like in MBL](https://mod-bot-list.glitch.me/bots/like/817158072232706108)**
]
]
$footer[Requested by $userTag[$authorID]]
$thumbnail[$userAvatar[$clientID]]
$color[$getRoleColor[$highestRole[$authorID]]]

$else

$title[Sobre $userTag[$clientID]]
$description[
$addField[Principal:;
Creador | [$userTag[776317504053837826]]($userAvatar[776317504053837826])
Ayudante | [$userTag[801241278553653279]]($userAvatar[801241278553653279])
Servidores Totales 💻 | $serverCount
Usuarios Totales :boy_tone1: | $allMembersCount]
$addField[Ping:;Bot 📌 | \`$pingms\`]
$addField[Version:;
Version del Bot ✅ | $getVar[version]
Version de Aoi.js <:AOIjs:839489859760029758> | v$packageVersion
Version de Node.js <:nodejs:841738475728142386> | $nodeVersion]
$addField[RAM y CPU:;
CPU | \`$cpu\`
RAM | \`$ram\`]
$addField[Links:;<:PFA_Support:827373027255779379>** [Pagina Oficial](https://pfasupport.glitch.me)** | **[Vota por mi en TOP.gg](https://top.gg/bot/$clientID/vote)** | **[Servidor de Soporte](https://discord.gg/JAHT6yczuZ
)** | **[Dame un Like en MBL](https://mod-bot-list.glitch.me/bots/like/817158072232706108)**
]
]

$footer[Pedido por $userTag[$authorID]]
$thumbnail[$userAvatar[$clientID]]
$color[$getRoleColor[$highestRole[$authorID]]]

$endif
`
})

bot.command({
name: "verify",
code: `$if[$hasRole[$authorID;$getServerVar[verif_role]]==false]

$if[$guildID==796556613095129088]

$takeRole[$authorID;826139881028845568]
$takeRole[$authorID;826139922138005584]
$giveRole[$authorID;$findRole[$roleName[$getServerVar[verif_role]]]]

$else

$dm[$authorID]

$setUserVar[verif_code;$randomString[15]]
$color[5865f2]
$description[Your Verification code: ||$randomString[15]||]
$deletecommand

$else

$dm[$authorID]
You are already verified in $serverName
$deletecommand

$endif
$endif
`
})

bot.command({
name: "global-chat",
code: `$useChannel[852405350866747392]
$argsCheck[>1;Type something!]
$author[$userTag;$authorAvatar]
$description[$message]
$deletecommand
$color[GREEN]
$sendMessage[Your Message has been sended <@$authorID>!; ]
`
})

//other variables

bot.variables({
  wiki_channel: "0",
  ticket_category: "0",
  ticket_lang: "",
  verif_code: "",
  verif_role: "0"
})

bot.command({
name: "$alwaysExecute",
code: `$if[$message==$getUserVar[verif_code]]

$deletecommand
$dm
$description[Now you are verified in $serverName!]
$color[5865f2]
$giveRole[$authorID;$findRole[$roleName[$getServerVar[verif_role]]]]

$else



$endif

$suppressErrors[ ]
`
})