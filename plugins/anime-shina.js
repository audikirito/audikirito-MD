import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/shina?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Result From Shina*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(shina)$/i
handler.tags = ['anime']
handler.help = ['shina']
handler.premium = false
handler.limit = true
handler.register = true
export default handler