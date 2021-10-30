module.exports = ({
name: "loop-queue",
aliases: "lq",
code: `
$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;:repeat: **Queue Loop enabled**;-1];false;:repeat: **Queue Loop disabled**]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getRoleColor[$highestRole[$authorID]]}]
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:$getRoleColor[$highestRole[$authorID]]}]

`
});
