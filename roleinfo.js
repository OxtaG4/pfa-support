module.exports = ({
name: "role-info",
code: `$author[Requested by $username;$authorAvatar]
$title[Role Info]
$description[
**About <@&$mentionedRoles[1]>**
----------------------
**When Role created :**
$creationDate[$mentionedRoles[1]]
----------------------
**Role Color :**
$getRoleColor[$mentionedRoles[1]]
----------------------
**Role position :**
$rolePosition[$mentionedRoles[1]]
----------------------
**Role ID :**
$mentionedRoles[1]]
$addTimestamp
$footer[$userTag/#$channelName[$channelID];$authorAvatar]
$color[$getRoleColor[$mentionedRoles[1]]]
$argsCheck[1;:x: **| Please mention a role!**]
$onlyIf[$mentionType[$message[1]]==role;{title::warning: ERROR :warning:}{description::x: **| Please mention a role!**} {color:$getRoleColor[$highestRole[$authorID]]}]
`
})