module.exports = ({
name: "create-channel",
aliases: "new-channel",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[<a:check1:840672065714651167> Success!]
$description[I created a new channel called "$message[1]", the type of channel is "$message[2]" (<#$createChannel[$message[1];$message[2];yes;$message[3]]>)]
$footer[Channel created by $username]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]

$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$argsCheck[>1;You need to put $getServerVar[prefix]create-channel \`channel name\` \`type of channel\` \`category ID\`]

$argsCheck[>2;You need to put $getServerVar[prefix]create-channel \`channel name\` \`type of channel\` \`category ID\`]

$argsCheck[>3;You need to put $getServerVar[prefix]create-channel \`channel name\` \`type of channel\` \`category ID\`]

$else

$title[<a:check1:840672065714651167> Success!]
$description[Cree un nuevo canal llamado "$message[1]", el tipo de canal es "$message[2]" (<#$createChannel[$message[1];$message[2];yes;$message[3]]>)]
$footer[Canal creado por $username]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]

$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$argsCheck[>1;Necesitas poner $getServerVar[prefix]create-channel \`nombre del canal\` \`tipo de canal\` \`ID de la categoria\`]

$argsCheck[>2;Necesitas poner $getServerVar[prefix]create-channel \`nombre del canal\` \`tipo de canal\` \`ID de la categoria\`]

$argsCheck[>3;Necesitas poner $getServerVar[prefix]create-channel \`nombre del canal\` \`tipo de canal\` \`ID de la categoria\`]

$endif
`
})