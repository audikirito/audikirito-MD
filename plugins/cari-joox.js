import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Lagu Yang Ingin Kamu Cari*`
await m.reply('siap saya carikan dulu bestie...')
let res = await fetch(`https://violetics.pw/api/media/joox-play?apikey=beta&query=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { malbum, msinger, mp3Url, msong, public_time, imgSrc } = json.result

let caption = `*Lagu :* ${msong}\n*Album :* ${malbum}\n*Artis :* ${msinger}\n*Tahun :* ${public_time}`
 
conn.sendFile(m.chat, mp3Url, `${msong}.mp3`, `${caption}`, m)
// conn.sendFile(m.chat, text, '', caption, m)
    m.reply(caption) 
}
handler.help = ['joox <lagu>']
handler.tags = ['pencarian']
handler.command = /^(joox)$/i
export default handler
