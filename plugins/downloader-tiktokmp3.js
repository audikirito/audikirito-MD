const fs = require ('fs')
const fetch = require ('node-fetch')
const axios = require ('axios')
const { tiktokdl, tiktokdlv2 } = require ('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
m.reply('Mohon Ditunggu yah Bro')
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}/`, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg',
    mediaType: 2, 
    description: urlnya,
    title: "⌫     ⌨︎     ☏︎",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/cce9ab4551f7150f1970d.jpg')).buffer(),
    sourceUrl: 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg',
  }
  } })
} catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktokmp3', 'ttmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|ttmp3)$/i

module.exports = handler
