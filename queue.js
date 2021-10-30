module.exports = ({
  name: "currentqueue",
  aliases: "cq",
  code: `$title[**Current Queue**]
  $description[$queue[1;12;{number} - **[{title}]({url})** by <@{userID}>]]
  $footer[Requested by $userTag[$authorID]]
  $addTimestamp
  $color[$getRoleColor[$highestRole[$authorID]]]
  $onlyIf[$queue[1;12;{number} - **[{title}]({url})** by <@{userID}>]!=;{title:**Error**}{description:The queue is empty!}{color:ff0000}]
  `
})