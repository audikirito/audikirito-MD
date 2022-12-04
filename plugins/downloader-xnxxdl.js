import fetch from 'node-fetch'
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `*Fitur Untuk Unduh Video XNXX*\n\n*_Contoh: .xnxxdl https://www.xnxx.com/video-13ezat5c/fuck_while_other_is_away_*`
    const sentMsg = await m.reply('*_Tunggu Sebentar Kami Sedang Memprosesnya..._*')
    let res = await fetch(`https://api.zacros.my.id/nsfw/xnxx-download?link=${text}`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.files.low, 'bkp.mp4', `*💬 Title:* ${json.result.title}\n*🌐 Link:* ${json.result.link}\n\nKualitas Video Buruk? Klik Link Dibawah Ini:*_${json.result.files.high}_*`, m)
}
handler.help = ['xnxxdl *link*']
handler.tags = ['asupan']
handler.command = /^xnxxdl$/i

handler.limit = 1
handler.premium = true

export default handler
