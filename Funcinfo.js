module.exports = ({
name:"function-info",
aliases: "func-info",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$title[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;**usd**]]
$description[\`\`\`
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]
\`\`\`
**Usage:**\`\`\`
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]
\`\`\`]
$color[$getRoleColor[$highestRole[$authorID]]]
$thumbnail[https://images-ext-2.discordapp.net/external/HaujjleTWRWWTG-ssrl_a7AxYJwceHpnOe_JafOcu-c/%3Fs%3D280%26v%3D4/https/avatars.githubusercontent.com/u/83202021]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
$argsCheck[>1;Usage: $getServerVar[prefix]function-info <function name>]

$else

$title[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;**usd**]]
$description[\`\`\`
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=Es?text=$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc];res]
\`\`\`
**Uso:**\`\`\`
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]
\`\`\`]
$color[$getRoleColor[$highestRole[$authorID]]]
$thumbnail[https://images-ext-2.discordapp.net/external/HaujjleTWRWWTG-ssrl_a7AxYJwceHpnOe_JafOcu-c/%3Fs%3D280%26v%3D4/https/avatars.githubusercontent.com/u/83202021]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, comando no encontrado]
$argsCheck[>1;Uso: $getServerVar[prefix]function-info <nombre de la funcion>]

$endif
`
})