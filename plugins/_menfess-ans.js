import fs from 'fs'
const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.\nKetik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke target balas pesan.");
	else {
		let imgr = fla.getRandom()
		let txt = `Hᴀɪ ᴋᴀᴋ @${mf.dari.split('@')[0]}, ᴋᴀᴍᴜ ᴍᴇɴᴇʀɪᴍᴀʜ ʙᴀʟᴇsᴀɴ ɴɪʜ.Pesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
		let sblm = `Pᴇsᴀɴ Aɴᴅᴀ Sᴇʙᴇʟᴜᴍɴʏᴀ ➛ ${mf.pesan}\nPᴇsᴀɴ Bᴀʟᴀsᴀɴɴʏᴀ ➨ ${m.text}`
		await this.send3ButtonDoc(mf.dari, txt, sblm, 'Balas', '.balasmenfess', 'Owner', '.owner', 'Credit', '.credit', fakes, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc}}})
		/*await this.sendButton(mf.dari, bottime, txt, `${imgr + 'Menfess'}`, [['BALAS PESAN', '.balasmenfess']], null)*/.then(() => {
			m.reply('Berhasil Mengirim balasan.')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}
/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * Jangan lupa bawa udut minimal sukun🗿
 
 *Nᴜᴍᴘᴀɴɢ Nᴀᴍᴀ*
 *Kᴀɴɢ Rᴇᴄᴏᴅᴇ : Aʟᴅɪ Lᴇsᴍᴀɴᴀ
 *Cʜᴀɴɴᴇʟ : AL? Offc
 
 *Minimal Jangan Di Hapos Anj
*/
