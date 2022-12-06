import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let cap = `
𝐓𝐢𝐭𝐥𝐞: ${title}
𝐔𝐫𝐥: ${url}
𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝗼𝐧 ${description}
𝐏𝐮𝐛𝐥𝐢𝐬𝐡𝐞𝐝: ${publishedTime}
𝐃𝐮𝐫𝐚𝐭𝐢𝗼𝐧: ${durationH}
𝐕𝐢𝐞𝐰: ${viewH}
`
await conn.sendButton(m.chat, `*YOUTUBE DOWNLOADER*`, cap, thumbnail, [
    ['Audio 🎧', `${usedPrefix}yta ${url} yes`],
    ['Video 🎥', `${usedPrefix}ytv ${url} yes`]
  ], m)
} catch {
if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*Title:* ${title}\n*Published:* ${publishedTime}\n*Duration:* ${durationH}\n*Views:* ${viewH}\n*Url:* ${url}`
  let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}

}
handler.help = ['play', 'play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = false

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
