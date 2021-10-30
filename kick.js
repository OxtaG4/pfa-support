module.exports = ({
name: "kick", 
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$kick[$mentioned[1]]
$title[Kicked $username[$mentioned[1]]]
$description[Reason: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No reason given;-1];false;$noMentionMessage;-1]]
$color[$getRoleColor[$highestRole[$authorID]]]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

$kick[$mentioned[1]]
$title[Expulse a $username[$mentioned[1]]]
$description[Razon: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No se ha dado una razon;-1];false;$noMentionMessage;-1]]
$color[$getRoleColor[$highestRole[$authorID]]]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$endif
`
}) 