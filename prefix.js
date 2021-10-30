module.exports = ({
name: "prefix",
code: `$if[$getGlobalUserVar[idioma]==Ingles]

$author[Prefix;$userAvatar[$clientID]]
$description[Actual Prefix: **__$getServerVar[prefix]__**]
$color[$getRoleColor[$highestRole[$authorID]]]

$else

$author[Prefix;$userAvatar[$clientID]]
$description[Prefix Actual: **__$getServerVar[prefix]__**]
$color[$getRoleColor[$highestRole[$authorID]]]

$endif
`
})