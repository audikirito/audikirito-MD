let handler = async (m, { conn, text }) => {
  if (!text) throw '*_Contoh: .mention Hai_*'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']
handler.command = /^mention$/i

export default handler 
