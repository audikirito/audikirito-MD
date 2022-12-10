import fs from 'fs'
import jimp_1 from 'jimp'
let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
    	let media = await q.download()
        let { img } = await pepe(media)
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.query({tag: 'iq', attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
        m.reply('Berhasil mengubah foto profil grup menjadi panjang!')
    } else throw `kirim/balas gambar dengan caption *${usedPrefix + command}*`
}
handler.help = ['setpppanjang']
handler.tags = ['group']

handler.command = /^setpppanjang$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

export async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
