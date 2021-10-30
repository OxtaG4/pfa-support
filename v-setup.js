module.exports = ({
name: "verif-setup",
aliases: ["v-setup"],
code: `
$argsCheck[1;{title:Verification Setup}{description:Type $getServerVar[prefix]$commandname and mention the role to be given to the user}{footer:Example $getServerVar[prefix]$commandname @role}{color:GREEN}]

$title[Success! <a:VeriGif:852748359001440256>]
$description[Role has been set to <@&$mentionedRoles[1]>!]
$color[$getRoleColor[$highestRole[$authorID]]]
$setServerVar[verif_role;$mentionedRoles[1]]

$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestrole[$authorid]]}]
`
})