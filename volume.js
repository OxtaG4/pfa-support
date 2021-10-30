module.exports = ({
   name: "volume",
   code: `
   $volume[$message[1]]
   $argsCheck[1;:x: | Put something like "**pfa!volume 1**"!]
   $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:$getRoleColor[$highestRole[$authorID]]}]
   $title[Now the volume is $message[1]]
   $description[Warning! If you turn the volume above 100, you could damage your hearing!]
   $color[$getRoleColor[$highestRole[$authorID]]]
   `
   });