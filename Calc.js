module.exports = ({
name: "calculator",
aliases: ["calc", "calc.exe"],
code: `$author[$username[$clientID] Services;$userAvatar[$clientID]]
$title[Calculator]
$description[**__The Math Operation:__**
\`$message\`
**__The Answer:__**
\`$math[$message[1]$replaceText[$replaceText[$message[2];x;*;-1];×;*;-1]$message[3]$replaceText[$replaceText[$message[4];x;*;-1];×;*;-1]$message[5]$replaceText[$replaceText[$message[6];x;*;-1];×;*;-1]$message[7]$replaceText[$replaceText[$message[8];x;*;-1];×;*;-1]$message[9]$replaceText[$replaceText[$message[10];x;*;-1];×;*;-1]$message[11]]\`]
$color[$getRoleColor[$highestRole[$authorID]]]

$argsCheck[>1;Put something like 1 + 1!]
$argsCheck[<11;Max 11 arguments]
`
})