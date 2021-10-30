module.exports = ({
name: "create-category",
aliases: "new-category",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[<a:check1:840672065714651167> Success!]
$description[I created a new category called "$message"]
$footer[Category created by $userTag[$authorID]]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]

$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]

$argsCheck[>1;You need to put $getServerVar[prefix]create-category **category name**]

$createChannel[$message;category]

$else

$title[<a:check1:840672065714651167> Exito!]
$description[Cree una categoria nueva llamada "$message"]
$footer[Category created by $userTag[$authorID]]
$addTimestamp
$color[$getRoleColor[$highestRole[$authorID]]]

$onlyPerms[admin;{title:Permisos Faltantes}{description:Necesitas el permiso de \`ADMINISTRADOR\` para usar este comando!}{color:$getRoleColor[$highestRole[$authorID]]}]

$argsCheck[>1;Necesitas poner $getServerVar[prefix]create-category **nombre de la categoria**]

$createChannel[$message;category]

$endif
`
})