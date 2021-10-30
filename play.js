module.exports = ({
name: "play",
aliases: "p",
code: `
$description[Added to the queue: **$playSong[$noMentionMessage;6s;yes;yes]**]
$color[$getRoleColor[$highestRole[$authorID]]]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getRoleColor[$highestRole[$authorID]]}]
`
});
