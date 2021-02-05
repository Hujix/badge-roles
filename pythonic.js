const discord = require('discord.js')
const Client = new discord.Client



Client.on("ready", () => {
    console.log('anan')
})

Client.once("message", msg => {




let flaggie = msg.author.flags
if (flaggie.any('PARTNERED_SERVER_OWNER')) {
   let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)


} if (flaggie.any('DISCORD_EMPLOYEE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

} if (flaggie.any('HYPESQUAD_EVENTS')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

}  if (flaggie.any('BUGHUNTER_LEVEL_1')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

}  if (flaggie.any('HOUSE_BRAVERY')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

}  if (flaggie.any('HOUSE_BRILLIANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

}  if (flaggie.any('HOUSE_BALANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

} if (flaggie.any('EARLY_SUPPORTER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

} if (flaggie.any('TEAM_USER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

} if (flaggie.any('BUGHUNTER_LEVEL_2')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

} if (flaggie.any('VERIFIED_DEVELOPER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Role ID')
    let stg = msg.guild.member(member)

stg. roles.add(partner)

}

    }
 )

Client.login('token')
