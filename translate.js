module.exports = ({
name: "translate",
code: `$title[Translated ✅]
$description[
__**Original Text**__
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=Es?text=$message;text]

__**Translated Text**__
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=Es?text=$message;res]]
$color[$getRoleColor[$highestRole[$authorID]]]
$argsCheck[>1;Type something!]
$thumbnail[https://images.emojiterra.com/twitter/v13.0/512px/1f1ea-1f1f8.png]
`
})