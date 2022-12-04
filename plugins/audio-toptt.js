import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*Fitur Ini Untuk Mengubah Vidio/Audio Menjadi VN/PTT*\n\n*_Reply Vidio/Audio Dengan Caption ${usedPrefix + command}_*`
    let media = await q.download?.()
    if (!media) throw '*Gagal Mengunduh Media*'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '*Gagal Mengkonversi*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.register = true
handler.limit = 1
handler.command = /^to(vn|(ptt)?)$/i

export default handler