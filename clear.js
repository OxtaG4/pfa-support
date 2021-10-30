module.exports = ({
name: "clear",
aliases: "purge",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$onlyIf[$isNumber[$message[1]]==true;Please enter a valid number!]
$author[$username[$clientID] Moderation;$userAvatar[$clientID]]
$description[I deleted $message[1] message(s) in <#$channelID> <:check:844766467265658880>]
$footer[This message will be deleted in 10 seconds]
$deleteIn[10s]
$color[$getRoleColor[$highestRole[$authorID]]]
$deletecommand
$clear[$message[1]]
$onlyIf[$message[1]<=150;Max Message Ammount = 150]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

$onlyIf[$isNumber[$message[1]]==true;Pon un numero valido!]
$author[$username[$clientID] Moderation;$userAvatar[$clientID]]
$description[Borre $message[1] mensaje(s) en <#$channelID> <:check:844766467265658880>]
$footer[Este mensaje se borrara en 10 segundos]
$deleteIn[10s]
$color[$getRoleColor[$highestRole[$authorID]]]
$deletecommand
$clear[$message[1]]
$onlyIf[$message[1]<=150;Maxima cantidad de mensajes = 150]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$endif
`
})