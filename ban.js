module.exports = ({
name: "ban",
code: `
$sendDM[$authorID;{description:User banned ID: $mentioned[1]}{color:BLUE} {author:$serverName[$guildID]:$serverIcon}]

$sendDM[$mentioned[1];https://api.xzusfin.repl.co/card?avatar=$replaceText[$userAvatar[$mentioned[1]];.webp;.png;-1]&middle=banned&name=$replaceText[$username[$mentioned[1]]; ;%20;-1]%23$discriminator[$mentioned[1]]&bottom=Reason:%20$replaceText[$noMentionMessage; ;%20;-1]&background=https://photy.org/photos/red-black-lines-photy.org.jpg&text=%23ff0000&avatarborder=%23FF0000&avatarbg=%23Ff0000]

$if[$getGlobalUserVar[idioma]==Ingles]

$title[Banned :hammer:]
$description[$username[$mentioned[1]] has been banned from the guild.
Reason: 
> $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No reason given;-1];false;$noMentionMessage;-1]]
$footer[User banned by $username]
$ban[$mentioned[1];$noMentionMessage]
$argsCheck[>1;:x: **| Please mention a user!**]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]
$color[$getRoleColor[$highestRole[$authorID]]]
$thumbnail[$userAvatar[$mentioned[1]]]

$else

$title[Banned :hammer:]
$description[$username[$mentioned[1]] Ha sido baneado del servidor.
Razon: 
> $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No se ha dado una razon.;-1];false;$noMentionMessage;-1]]
$footer[Usuario baneado por $username]
$ban[$mentioned[1];$noMentionMessage]
$argsCheck[>1;:x: **| Porfavor menciona a un usuario!**]
$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]
$color[$getRoleColor[$highestRole[$authorID]]]
$thumbnail[$userAvatar[$mentioned[1]]]

$endif
`
});