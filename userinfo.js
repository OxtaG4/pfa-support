module.exports = ({
name: "user-info",
code: `$onlyIf[$isBot[$mentioned[1]]!=true;{title::warning: ERROR :warning:} {description::x: **| Don't mention a bot, mention a user!**} {color:$getRoleColor[$highestRole[$authorID]]}]
$suppressErrors[{title::warning: ERROR :warning:}{description::x: **| Please mention someone (Human)!**} {color:$getRoleColor[$highestRole[$authorID]]}]
$color[$getRoleColor[$highestRole[$authorID]]]
$title[**__User Info__**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[
**ID :**
$mentioned[1;yes]
$replaceText[$replaceText[$checkCondition[$nickname==$username];true;**Username:** $userTag[$mentioned[1]];-1];false;**Nickname:** $nickname[$mentioned[1]]#$discriminator[$mentioned[1]];-1]

$addField[__**Status**__;
:star: **| Status |** $replaceText[$replaceText[$replaceText[$replaceText[$status[$mentioned[1]];online;<:online_:852796349359456266> Online;-1];dnd;<:do_not_disturb:852796418463891456> Do not Disturb;-1];idle;<:idle:852796471262838784> Idle;-1];offline;<:offline_:852796549792661544> Offline;-1]
:speech_balloon: **| Custom Status |** $replaceText[$getCustomStatus[$mentioned[1];state];none;No custom status;-1];no]

$addField[__**Other**__;<:role:853828034104524801> **| Roles |** $replaceText[$replaceText[$checkCondition[$userRoles[$mentioned[1]]==];true;\`None\`;-1];false;$userRoles[$mentioned[1];mentions; | ];-1]
<:role:853828034104524801> **| Highest Role |** <@&$highestRole[$mentioned[1]]>
:date: **| When user joined Server |** $memberJoinedDate[$mentioned[1];date]
:date: **| When user joined Discord |** $creationDate[$mentioned[1];date]
<:boost:853828140614156298> **| Is Boosting |** $replaceText[$replaceText[$isBoosting[$mentioned[1]];false;No, $username[$mentioned[1]] isn't boosting $serverName;-1];true;Yes, $username[$mentioned[1]] is boosting $serverName;-1]]
$addField[Avatar;**[HERE]($userAvatar[$mentioned[1]])**]]

$argsCheck[1;{title::warning: ERROR :warning:} {description::x: **| You need to mention someone**} {color:$getRoleColor[$highestRole[$authorID]]}]
$footer[$userTag/#$channelName[$channelID];$authorAvatar]
`
})