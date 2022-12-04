import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*Fitur Untuk Mendapatkan PP Tik Tok*\n\n*_Contoh: #pptiktok onlyonegreat_*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=KitsuneOFC`
conn.sendFile(m.chat, res, 'error.jpg', `*Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['pptiktok'].map(v => v + ' <user>')
handler.tags = ['downloader']
handler.command = /^(p((rofilet(iktok|t)|pt(iktok|t))|ptik)|t(ik(tokp(rofile|p)|pp)|tp(rofile|p)))$/i
handler.register = true
handler.limit = 1

export default handler
