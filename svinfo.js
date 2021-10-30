module.exports = ({
name: "serverinfo",
aliases: ["server-info", "sv-info", "svinfo"],
code: `
$thumbnail[$replaceText[$replaceText[$checkCondition[$serverIcon[$guildID;2048;2048;yes]==null];true;https://cdn.discordapp.com/attachments/821489885432774656/847671344510009374/13_sin_titulo_20210528000309.png;-1];false;$serverIcon[$guildID;2048;2048;yes];-1]]
$title[__**Server Info**__]
$description[Name: $serverName[$guildID]
ID: $guildID
Owner: <@$ownerID>
Verification Level: \`$serverVerificationLevel\`

$addField[__**Other**__;<:role:853828034104524801> **| Roles |** \`$roleCount\`
:slight_smile: **| Emojis |** \`$emojiCount\`
:robot: **| Bots |** \`$botCount\`]

$addField[__**Prescence**__;
<:members:853828090941538344> **| Members |** \`$membersCount\`
<:online_:852796349359456266> **| Online Members |** \`$membersCount[$guildID;online]\`
<:do_not_disturb:852796418463891456> **| DND Members |** \`$membersCount[$guildID;dnd]\`
<:idle:852796471262838784> **| Idle Members |** \`$membersCount[$guildID;Idle]\`;no]
$addField[__**Channels**__;**All |** \`$channelCount\`
:speech_balloon: **| Text |** \`$channelCount[text]\`
<:category:853827944496758784> **| Categories |** \`$channelCount[category]\`
:loud_sound: **| Voice |** \`$channelCount[voice]\`;no]

$addField[**__Boosts__**;<:boost:853828140614156298> **| Boost Count |** \`$serverBoostCount\`
<:boost:853828140614156298> **| Boost Level |** \`$serverBoostLevel\`;no]

$addField[Icon;$replaceText[$replaceText[$checkCondition[$serverIcon[$guildID;2048;2048;yes]==null];true;The server hasn't got an Icon;-1];false;**[Here]($serverIcon[$guildID;2048;2048;yes])**;-1]]
]
$footer[$userTag/#$channelName[$channelID];$authorAvatar]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]`
})