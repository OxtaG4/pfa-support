module.exports = ({
  name: "stop",
  code: `$title[Stopped playing music]
  $description[Thanks for using PFA Support!]
  $color[$getRoleColor[$highestRole[$authorID]]]
  $stopSong
  $onlyIf[$voiceID!=;You must be in a VC to stop playing music!]
  $deleteIn[10s]
  $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:$getRoleColor[$highestRole[$authorID]]}]`
})