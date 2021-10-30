module.exports = ({
name: "invite",
code: `$dm[$authorID]
$author[$userTag[$clientID] Invite;$userAvatar[$clientID]]
$addField[Link: ;**[Click Here to invite $username[$clientID]!](https://discord.com/oauth2/authorize?client_id=817158072232706108&permissions=8&redirect_uri=https%3A%2F%2Fpfasupport-thank-you.glitch.me&scope=bot%20applications.commands)**]
$color[$getRoleColor[$highestRole[$authorID]]]
$sendMessage[{title:Invite} {description:Check your dm <@$authorID>!} {color:$getRoleColor[$highestRole[$authorID]]};Error]`
})