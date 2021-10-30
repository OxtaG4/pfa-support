module.exports = ({
name: "set-sugchannel",
code: `
$description[Success! Now the suggestion channel is <#$mentionedChannels[1]>]
$color[$getRoleColor[$highestRole[$authorID]]]
$setServerVar[Sugchannel;$mentionedChannels[1]]

$argsCheck[1;:x: **| Please put a channel!**]
$onlyPerms[admin;:x: **| You need to be an \`ADMINISTRATOR\`!]
`
})