module.exports = ({
name: "loop-track",
aliases: "lt",
code: `
$replaceText[$replaceText[$checkCondition[$loopSong==true];true;:repeat_one: **Enabled!**;-1];false;:repeat_one: **Disabled!**]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]
$onlyIf[$loopQueue==true;{title:**Error**}{description:Queue Loop is Enabled! Please disable it}{color:ff0000}]

`
})