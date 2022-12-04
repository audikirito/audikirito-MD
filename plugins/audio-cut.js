import { promises } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, usedPrefix, command }) => {


        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!/audio/.test(mime)) throw `Balas Audio/VN Dengan Perintah *${usedPrefix + command}*\n\nFormat:\n*${usedPrefix + command} 00:00:00 00:00:30*\n`
        let audio = await q.download?.()
        if (!audio) throw '*Tidak Dapat Mengunduh Audio*'
        if (!args[0] || !args[1]) throw `Gunakan Dengan Cara:\n${usedPrefix + command} WaktuAwal WaktuAkhir\n\n*Example: ${usedPrefix + command} 00:00:30 00:00:30*`
            let ran = (new Date * 1) + '.mp3'
            let media = '../tmp/' + ran
            let filename = media + '.mp3'
            await promises.writeFile(media, audio)
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
                await promises.unlink(media)
                if (err) return Promise.reject( `*ERROR*`)
                let buff = await promises.readFile(filename)
                m.reply(wait)
                conn.sendFile(m.chat, buff, filename, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                await promises.unlink(filename)
            })
}
handler.help = ['cut'].map(v => v + ' <text>')
handler.tags = ['audio']
handler.command = /^(potong(audio|mp3)|cut(audio|mp3))$/i
handler.register = true
handler.limit = true
export default handler
