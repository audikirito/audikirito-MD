import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/yotsuba?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Result From Yotsuba*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(yotsuba)$/i
handler.tags = ['anime']
handler.help = ['Yotsuba']
handler.premium = false
handler.limit = true
handler.register = true
export default handler