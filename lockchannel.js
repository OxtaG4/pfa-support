module.exports = ({
name: "lock-channel",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[🔒Locked🔒]
$description[Locked channel
> <#$channelID>
When?
> $year/$month/$day
Admin
> <@$authorID>]
$color[$getRoleColor[$highestRole[$authorID]]]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

$title[🔒Bloqueado🔒]
$description[Canal Bloqueado
> <#$channelID>
Cuando?
> $year/$month/$day
Administrador
> <@$authorID>]
$color[$getRoleColor[$highestRole[$authorID]]]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$endif
`
})