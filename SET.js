module.exports = ({
name: "prefix-set",
code: `
$if[$checkCondition[$charCount[$message[1]]<=4]==true]

$title[Success! <a:tickmark:855857197573210132>]
$description[Now my prefix is $message[1]]
$footer[$username[$clientID];$userAvatar[$clientID]]
$color[$getRoleColor[$highestRole[$authorID]]]

$setServerVar[prefix;$message[1]]

$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

Max 4 characters!

$endif

$argsCheck[1;Put a prefix!]
$onlyIf[$isEmoji[$message[1]]==false;Emojis are not allowed as a prefix!]
`
})