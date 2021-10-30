module.exports = ({
name: "slowmode-off",
code: `$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]
$title[Success!]
$description[Slowmode is now disabled!]
$footer[Slowmode Disabled by $username (Administrator)]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]

$slowmode[$channelID;0s]
`
})