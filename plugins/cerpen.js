import axios from 'axios'
let handler = async(m, { conn, text }) => {

  await m.reply('*Searching...*')
	axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=KitsuneOFC`).then ((res) => {
	 	let hasil = `*Tittle:* ${res.data.result.title}
*Creator:* ${res.data.result.creator}
*Cerpen:* ${res.data.result.cerpen}

    conn.reply(m.chat, hasil, m)`
	})
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(cerpen)$/i
handler.register = true
handler.limit = 1
handler.fail = null
handler.exp = 0

export default handler
