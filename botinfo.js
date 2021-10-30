module.exports = ({
name: "bot-info",
code: `$onlyIf[$isBot[$mentioned[1]]!=false;{title::warning: ERROR :warning:} {description::x: **| Don't mention a user, mention a bot!**}{color:$getRoleColor[$highestRole[$authorID]]}]
$suppressErrors[{title::warning: ERROR :warning:}{description::x: **| Please mention someone (Bot)!**} {color:$getRoleColor[$highestRole[$authorID]]}]
$title[**__Bot Info__**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[
**ID :**
$mentioned[1;yes]
$replaceText[$replaceText[$checkCondition[$nickname==$username];true;**Username:** $userTag[$mentioned[1]];-1];false;**Nickname:** $nickname[$mentioned[1]]#$discriminator[$mentioned[1]];-1]

$addField[__**Status**__;
:star: **| Status |** $replaceText[$replaceText[$replaceText[$replaceText[$status[$mentioned[1]];online;<:online_:852796349359456266> Online;-1];dnd;<:do_not_disturb:852796418463891456> Do not Disturb;-1];idle;<:idle:852796471262838784> Idle;-1];offline;<:offline_:852796549792661544> Offline;-1]]

$addField[__**Other**__;<:role:853828034104524801> **| Roles |** $replaceText[$replaceText[$checkCondition[$userRoles[$mentioned[1]]==];true;\`None\`;-1];false;$userRoles[$mentioned[1];mentions; | ];-1]
<:role:853828034104524801> **| Highest Role |** <@&$highestRole[$mentioned[1]]>
:date: **| When bot joined Server |** $memberJoinedDate[$mentioned[1];date]
:date: **| When bot joined Discord |** $creationDate[$mentioned[1];date];no]
$addField[**__Invite__**;**[0 Perms](https://discord.com/api/oauth2/authorize?client_id=$mentioned[1]&permissions=0&scope=bot)** || **[8 Perms](https://discord.com/api/oauth2/authorize?client_id=$mentioned[1]&permissions=8&scope=bot)**]]
$onlyIf[$mentioned[1]!=$clientID;Please use $getServerVar[prefix]about to see my info]
$color[$getRoleColor[$highestRole[$authorID]]]

$argsCheck[1;{title::warning: ERROR :warning:} {description::x: **| You need to mention someone**} {color:$getRoleColor[$highestRole[$authorID]]}]
`
})
