module.exports = ({
name: "suggestion",
code: `$if[$getServerVar[Sugchannel;$guildID]==0]

:x: **| You need to select a channel for the suggestions!**

$else

$useChannel[$getServerVar[Sugchannel]]
$author[New Suggestion!]
$description[**"$message"**]
$footer[Suggestion by $userTag[$authorID]]
$addTimestamp
$argsCheck[>1;Please put a message!]
$color[$getRoleColor[$highestRole[$authorID]]]
$addReactions[<:check:844766467265658880>;❌]
$deletecommand

$endif`
})