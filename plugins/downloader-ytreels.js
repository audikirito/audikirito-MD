import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
   
  if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} https://youtube.com/shorts/68dfq9ine1k`)
  let res = await fetch(`https://api.lolhuman.xyz/api/ytreels?apikey=${global.lolkey}&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let caption = `*Title:* ${x.title}
*Size:* ${x.size}
`
conn.sendFile(m.chat, x.link, 'ytreels.mp4', caption, m)
}
handler.help = ['ytreels']
handler.tags = ['downloader']
handler.command = /^(ytreels)$/i

export default handler
