module.exports = ({
name: "unlock-channel",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[🔒Unlocked🔒]
$description[Unlocked channel
> <#$channelID>
Admin
> <@$authorID>]
$color[$getRoleColor[$highestRole[$authorID]]]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

$title[🔒Desbloqueado🔒]
$description[Canal Desbloqueado
> <#$channelID>
Administrador
> <@$authorID>]
$color[$getRoleColor[$highestRole[$authorID]]]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$endif
`
})