module.exports = ({
name: "unban",
code: `$username Unbanned the user $username[$message[1]]
$unban[$message[1]]
$onlyPerms[admin;{title:Missing Permissions}{description:You need the permission of: \`ADMINISTRATOR\` to use this command!}{color:$getRoleColor[$highestRole[$authorID]]}]
$argsCheck[1;Please put a id of a user (Banned Obviously)!`
})