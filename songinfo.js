module.exports = ({
name: "song-info",
code: `$title[Song Info]
$thumbnail[$songInfo[thumbnail]]
$description[Title: **[$songInfo[title]]($songInfo[url])**
  
Duration: $songInfo[duration]
Current Duration: **$songInfo[current_duration]/$songInfo[duration_left]**

Publiser: **[$songInfo[publisher]]($songInfo[publisher_url])**

Who added the song: **$userTag[$songInfo[userID]]**
]
$color[$getRoleColor[$highestRole[$authorID]]]
$author[PFA Support Music;$userAvatar[$clientID]]
`
})