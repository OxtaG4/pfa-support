module.exports = ({
name: "new-emoji",
aliases: "create-emoji",
code: `$addEmoji[$message[1];$message[2];yes]
$argsCheck[>1;I need a link]
$argsCheck[>2;I need a name]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]
`
})