module.exports = ({
name: "report",
code: `$argsCheck[>1;And... The message?]

$dm[776317504053837826]
$author[Atencion, Nuevo reporte de $username;$authorAvatar]
$thumbnail[$serverIcon]
$description[Mensaje: "**$message**"
ID del usuario : $authorID
Usuario: <@$authorID>]
$footer[Reporte hecho desde $serverName[$guildID].]
$color[$getRoleColor[$highestRole[$authorID]]]
$addTimestamp
`
})