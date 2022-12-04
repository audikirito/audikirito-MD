import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random2/waifu?apikey=KitsuneOFC'
	conn.sendButton(m.chat, '*Results From Waifu*', wm, await(await fetch(url)).buffer(), [['𝗡𝗘𝗫𝗧',`.${command}`]],m)
}
handler.command = /^(waifu)$/i
handler.tags = ['anime']
handler.help = ['waifu']
handler.limit = 1
handler.register = true

export default handler