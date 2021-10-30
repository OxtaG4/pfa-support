module.exports = ({
  name: "pause",
  code: `$addCmdReactions[⏸]
  $pauseSong
  $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
})