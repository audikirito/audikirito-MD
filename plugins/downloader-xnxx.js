import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
    if (!text) throw `*Fitur Untuk Mencari Video Dari Situs XNXX*\n\n*_Contoh: .xnxxsearch Japan_*`
    let res = await fetch(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*💬 Title:* ${v.title}\n*📝 Info:* ${v.info}\n*🌐 Link:* ${v.link}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['asupan']
handler.command = /^(xnxxsearch)$/i
handler.register = true
handler.limit = 1
handler.premium = true

export default handler
