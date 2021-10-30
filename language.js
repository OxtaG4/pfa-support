module.exports =({
name: "language",
aliases: "lang",
code: `$if[$message[1]==set]

$reactionCollector[$splitText[1];$authorID;40s;🇪🇸,🇺🇸;español,english;yes]
$textSplit[$sendMessage[{title:Set Language}{description:🇪🇸 $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[idioma]==Ingles];true;Español;-1];false;Español (Actualmente Seleccionado);-1]
🇺🇸 $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[idioma]==Español];true;English;-1];false;English (Actually Selected);-1]} {color:$getRoleColor[$highestRole[$authorID]]}{thumbnail:https://images.emojiterra.com/google/android-nougat/512px/1f30e.png};yes]; ]

$else

$title[$replaceText[$replaceText[$getUserVar[idioma];Ingles;Language;-1];Español;Idioma;-1]]
$description[$replaceText[$replaceText[$getUserVar[idioma];Español;Mi idioma actual es Español;-1];Ingles;My actual language is English;-1]]
$color[$getRoleColor[$highestRole[$authorID]]]
$addTimestamp
$footer[PFA Support Language;$userAvatar[$clientID]]

$endif

`
})