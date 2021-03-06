module.exports = ({
    name: "skip",
    code: `
    $author[Music Skipped]
    $skipSong
    $description[<@$authorID> skipped to the next song!]
    $color[$getRoleColor[$highestRole[$authorID]]]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getRoleColor[$highestRole[$authorID]]}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:$getRoleColor[$highestRole[$authorID]]}]`
    });