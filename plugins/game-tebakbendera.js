import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.sendButton(m.chat, '*_Masih Ada Soal Belum Terjawab Di Chat Ini_*', author, null, buttons, conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()} Games 🎮*

*⏱️ Timeout ${(timeout / 1000).toFixed(2)} Detik*
*🔍 Ketik* ${usedPrefix}hben Untuk Bantuan
*🎁 Prize* ${poin} XP
    `.trim()
    conn.tebakbendera[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.sendButton(m.chat, `*_Waktu Habis_*\nJawabannya Adalah *${json.name}*`, author, null, [
                ['𝗧𝗘𝗕𝗔𝗞-𝗕𝗘𝗡𝗗𝗘𝗥𝗔', '/tebakbendera']
            ], conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.register = true
handler.limit = 1
export default handler

const buttons = [
    ['𝗕𝗔𝗡𝗧𝗨𝗔𝗡', '/hben'],
    ['𝗡𝗬𝗘𝗥𝗔𝗛', 'menyerah']
]
