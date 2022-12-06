import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

  if (!text) throw 'Cari apa?'
  let anu = await youtubeSearch(`${text}`)
    let array = [];
    anu.video.forEach(function(i) {
        array.push({
          title: i.title,
          rowId: usedPrefix + `ytv ${i.url}`,
          description: `${i.authorName} | ${i.durationH}`
        });
    });
    const sections = [
      {
        title: `━ ━ ━ ━ 『 Youtube Search 』 ━ ━ ━ ━`,
        rows: array
      }
    ]
    const listMessage = {
      text: `*${htki} Youtube Search ${htka}*\n\n𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${name}\n𝐑𝐞𝐬𝐮𝐥𝐭 𝐅𝐫𝗼𝗺 : ${text}\n\n*𝐂𝐡𝗼𝗼𝐬𝐞 𝐘𝗼𝐮𝐓𝐮𝐛𝐞 𝐒𝐞𝐚𝐫𝐜𝐡* `,
      footer: global.author,
      //title: `⎔───「 ${packname} 」───⎔`,
      buttonText: `List Search 🎫`,
      sections
    }
    await conn.sendMessage(m.chat, listMessage, { quoted : m })
    {
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
