module.exports = ({
name: "join",
aliases: ['connect'],
code: `
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;Someone is listening to songs in another Voice Channel Either join their Voice Channel or use this command later.]
$onlyIf[$voiceid[$authorid]!=;Please join a Voice Channel and use this command.]
`
})