module.exports = ({
name: "nuke",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$deleteChannels[$channelID]
$channelSendMessage[$cloneChannel[$channelID;yes];{title:Nuked! <:sunglasses_boom:827279791366733865> 
}{description::white_check_mark: **| Channel Nuked succesfully!**}{color:$getRoleColor[$highestRole[$authorID]]}]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$else

$deleteChannels[$channelID]
$channelSendMessage[$cloneChannel[$channelID;yes];{title:Nukeado! <:sunglasses_boom:827279791366733865> 
}{description::white_check_mark: **| ¡Canal nukeado con exito!**}{color:$getRoleColor[$highestRole[$authorID]]}]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$endif
`
})