import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/gremory?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Result From Gremory*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(gremory)$/i
handler.tags = ['anime']
handler.help = ['gremory']
handler.premium = false
handler.limit = true
handler.register = true
export default handler