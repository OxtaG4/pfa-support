module.exports = ({
name: "google-search",
aliases: "gs",
code: `$author[Google Search;http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png;https://www.google.com]
$description[Searched in Google: [$message](https://www.google.com/search?q=$replaceText[$message; ;+;-1])]
$color[$getRoleColor[$highestRole[$authorID]]]

$argsCheck[>1;{title::warning: ERROR :warning:} {description::x: **| Put 1 or more arguments!**} {color:$getRoleColor[$highestRole[$authorID]]}]
`
})