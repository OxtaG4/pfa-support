module.exports = ({
name: "leave",
aliases: ['disconnect', 'dc'],
code: `
$addCmdReactions[👋]
$leavevc
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:$getRoleColor[$highestRole[$authorID]]}]
$onlyIf[$voiceID!=;You must be in a VC!]`
})
