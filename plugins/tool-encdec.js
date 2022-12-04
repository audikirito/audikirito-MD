import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, command, usedPrefix }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: 'Simple Bot Esm', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'dec32') {
if (!text) throw `*_Contoh: ${usedPrefix}${command} audikirito_*`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&decode=${text}`)
    let data = await res.json()
    
    let caption = `*Enc:* ${data.result.enc}\n*String:* ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['𝗡𝗘𝗫𝗧', `${usedPrefix}enc32 ${text}`]
    ], m, fdoc)
}

if (command == 'enc32') {
if (!text) throw `*_Contoh: ${usedPrefix}${command} audikirito_*`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&encode=${text}`)
    let data = await res.json()
    
    let caption = `*Enc:* ${data.result.encode}\n*String:* ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['𝗡𝗘𝗫𝗧', `${usedPrefix}dec32 ${text}`]
    ], m, fdoc)
}

if (command == 'dec64') {
if (!text) throw `*_Contoh: ${usedPrefix}${command} audikirito_*`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&decode=${text}`)
    let data = await res.json()
    
    let caption = `*Enc:* ${data.result.enc}\n*String:* ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['𝗡𝗘𝗫𝗧', `${usedPrefix}enc64 ${text}`]
    ], m, fdoc)
}

if (command == 'enc64') {
if (!text) throw `*_Contoh: ${usedPrefix}${command} audikirito_*`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&encode=${text}`)
    let data = await res.json()
    
    let caption = `*Enc:* ${data.result.encode}\n*String:* ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['𝗡𝗘𝗫𝗧', `${usedPrefix}dec64 ${text}`]
    ], m, fdoc)
}


}
handler.command = handler.help = ['enc32', 'dec32', 'enc64', 'dec64']
handler.tags = ['tools']
handler.premium = false
handler.register = true
export default handler
