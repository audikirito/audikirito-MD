import xfar from 'xfarr-api'
import { stickerTelegram } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, text, command, usedPrefix, args }) => {
try {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let ras = await xfar.Telesticker(args[0])
		await m.reply(`Sending ${ras.length} stickers...`)
		if (m.isGroup && ras.length > 30) {
			await m.reply('*_Jumlah Stiker Lebih Dari 30, Bot Akan Mengirimkannya Dalam Obrolan Pribadi._*')
			for (let i = 0; i < ras.length; i++) {
				conn.sendMessage(m.sender, { sticker: { url: ras[i].url }})
			}
		} else {
			for (let i = 0; i < ras.length; i++) {
				conn.sendMessage(m.chat, { sticker: { url: ras[i].url }})
			}
		}
	} else if (args && args.join(' ')) {
		let [query, page] = args.join(' ').split('|')
		let ris = await stickerTelegram(query, page)
		if (!ris.length) throw `Query "${args.join(' ')}" not found`
		m.reply(ris.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
	} else throw '*_Masukkan Query/Telesticker URL_*'
	} catch {
	if (!text) throw '*_Contoh: https://t.me/addstickers/LINE_Menhera_chan_ENG_*'
let ros = await axios('https://violetics.pw/api/downloader/telestiker?apikey=beta&url=' + text)
let json = ros.data
let dapet = json.result.sticker
	let row = Object.keys(dapet).map((v, index) => ({
		title: `*📌 Line Sticker:* ${1 + index}`,
		description: '\n*💬 Name:* ' + json.result.name + '\n*☁️ Title:* ' + json.result.title,
		rowId: usedPrefix + 'get ' + dapet[v]
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['telesticker']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i
handler.register = true
handler.limit = 1
export default handler
