module.exports = ({
name: "command-info",
aliases: "cmd-info",
code: `$argsCheck[1;Please type a command name!]
$onlyIf[$commandInfo[$message[1];name]!=;Please type a valid commamd name!]
$title[Command Info]
$description[Name: \`$commandInfo[$message[1];name]\`
Aliases: \`$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]==];true;No aliases.;-1];false;$commandInfo[$message[1];aliases]]\`]
$color[$getRoleColor[$highestRole[$authorID]]]
`
})