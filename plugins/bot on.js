let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak kirito tadi ketiduran😊* ')
}
handler.tags = ['main']
handler.command = /^(kiritoon)$/i

handler.admin = true

export default handler
