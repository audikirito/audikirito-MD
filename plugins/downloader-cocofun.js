import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `*Fitur Untuk Mengunduh Video Cocofun*\n\n*_Contoh: ${usedPrefix}${command} http://i.coco.fun/short/1513tui/_*`
if (!args[1]) return conn.sendButton(m.chat, htki + ' COCOFUN ' + htka, null, null, [['𝗡𝗢 𝗪𝗠', `.cocofun ${args[0]} nowm`],['𝗪𝗜𝗧𝗛 𝗪𝗠', `.cocofun ${args[0]} withwm`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=KitsuneOFC&url=${args[0]}`)
    let x = await res.json()
  if (args[1] == 'withwm') {
    conn.sendButton(m.chat, x.result.withwm, `*${htki} COCOFUN ${htka}*
*💬 Title:* ${x.result.title}
*🔖 Tag:* ${x.result.tag}
*👍 Like:* ${x.result.likes}
*👎 Dislike:* ${x.result.dislike}
*👁️ Views:* ${x.result.views}
*📂 Uploader:* ${x.result.uploader}
*⏳ Duration:* ${x.result.duration}
*👎 Dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', m)
  }
  if (args[1] == 'nowm') {
    conn.sendButton(m.chat, x.result.nowm, `*${htki} COCOFUN ${htka}*
*💬 Title:* ${x.result.title}
*🔖 Tag:* ${x.result.tag}
*👍 Like:* ${x.result.likes}
*👎 Dislike:* ${x.result.dislike}
*👁️ Views:* ${x.result.views}
*📂 Uploader:* ${x.result.uploader}
*⏳ Duration:* ${x.result.duration}
*👎 Dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', m)
  }
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^c(oco(fun(d(own(load(er)?)?|l))?|d(own(load(er)?)?|l))|cfun(d(own(load(er)?)?|l))?)$/i

export default handler