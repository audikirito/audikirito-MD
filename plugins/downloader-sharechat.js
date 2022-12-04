import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!args[0]) throw `*_Contoh: ${usedPrefix}${command} https://sharechat.com/video/pDExqga_*`
        let res = await fetch(`https://api.lolhuman.xyz/api/sharechat?apikey=KitsuneOFC&url=${args[0]}`)
    let x = await res.json()
  conn.sendButtonVid(m.chat, x.result.link_dl, `*${htki} SHARECHAT DL ${htka}*
\n*💬 Title:* ${x.result.title}
    `, author, '𝗧𝗢 𝗠𝗣𝟯', '.tomp3', fpayment, adReply)
  
}
handler.help = ['sharechat'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((sharechat)(downloder|dl)?)$/i
handler.register = true
handler.limit = 1
export default handler
