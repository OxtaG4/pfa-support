module.exports = ({
name: "slowmode-on",
code: `$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$slowmode[$channelID;$message[1]]

$argsCheck[>1;Please put at least **5** seconds!]

$title[Success!]
$description[Now the **Slowmode** time of this channel is $message[1]]

$footer[Slowmode enabled by $username (Administrator)]

$color[$getRoleColor[$highestRole[$authorID]]]
$addTimestamp
`
})