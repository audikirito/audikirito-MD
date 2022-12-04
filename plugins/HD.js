import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m) => {

try {
 await m.reply('*_Sedang Membuat..._*')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*_Reply/Caption Gambar Dengan Perintah .hd_*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*_Tipe ${mime} Tidak Didukung_*`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'hd.jpg', '*_Quality Improvement_*', m)
} catch (e) {
  m.reply('*_ERROR_*')
 }
}
handler.help = ['hd', 'enhance']
handler.tags = ['tools']
handler.command = /^(hd|enhance)$/i
handler.register = true
handler.limit = true

export default handler
