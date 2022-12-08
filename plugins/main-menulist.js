let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys"))
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
before: ` `.trimStart(),
header: '⃟⃟☰⃟⃟ᭁ═━┈━┈༓ *%category* ',
body: `┆➨ %cmd %isPremium %islimit`,
footer: `⃟⃟⃟⃟࿑⃟⃟⃟࿐═┈༓᭄༤\n`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

 /**************************** TIME *********************/
 
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)

//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let tags
let emot = `⃟࿑⃟⃟⃟⟣⟜ ${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'game': 'Game',
'rpg': 'RPG Games',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'': 'No Category',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [
{
title: `⃟⟣⟚⟝ ⟡ List Menu ${namebot} ⟡ ⟞⟚⟢⃟`,
rows: [
{title: `${emot} Rpg`, rowId: ".? rpg", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀᴍ Mᴇɴᴜ Rᴘɢ"},
{title: `${emot} Exp`, rowId: ".? xp", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Exᴘ"},
{title: `${emot} Game`, rowId: ".? game", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Gᴇᴍᴇ"},
{title: `${emot} Fun`, rowId: ".? fun", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Fᴜɴ"},
{title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Kᴇʀᴀɴɢ"},
{title: `${emot} Quotes`, rowId: ".? quotes", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Qᴜᴏᴛᴇs"},
{title: `${emot} Anime`, rowId: ".? anime", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aɴɪᴍᴇ"},
{title: `${emot} Nsfw`, rowId: ".? nsfw", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Nsғᴡ"},
{title: `${emot} Premium`, rowId: ".? premium", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Pʀᴇᴍɪᴜᴍ"},
{title: `${emot} Anonymous Chats`, rowId: ".? anonymous", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aɴᴏɴʏᴍᴏᴜs Cʜᴀᴛs"},
{title: `${emot} Al-Quran`, rowId: ".? quran", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aʟ-Qᴜʀᴀɴ"},
{title: `${emot} Internet`, rowId: ".? internet", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Iɴᴛᴇʀɴᴇᴛ"},
{title: `${emot} Berita`, rowId: ".? berita", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Bᴇʀɪᴛᴀ"},
{title: `${emot} Downloader`, rowId: ".? downloader", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Dᴏᴡɴʟᴏᴀᴅᴇʀ"},
{title: `${emot} Stikers`, rowId: ".? stiker", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Sᴛɪᴋᴇʀ"},
{title: `${emot} Nulis`, rowId: ".? nulis", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Nᴜʟɪs"},
{title: `${emot} Audio`, rowId: ".? audio", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aᴜᴅɪᴏ"},
{title: `${emot} Sound Menu`, rowId: ".soundmenu", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Sᴏᴜɴᴅ"},
{title: `${emot} Group`, rowId: ".? group", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Gʀᴏᴜᴘ"},
{title: `${emot} Admin`, rowId: ".? admin", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aᴅᴍɪɴ"},
{title: `${emot} Database`, rowId: ".? database", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Dᴀᴛᴀʙᴀsᴇ"},
{title: `${emot} Tools`, rowId: ".? tools", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Tᴏᴏʟs"},
{title: `${emot} Info`, rowId: ".? info", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Iɴғᴏ"},
{title: `${emot} Owner`, rowId: ".? owner", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Oᴡɴᴇʀ"},
]
}, {
title: `⃟⟣⟚⟝ ⟡ Support Me ${namebot} ⟡ ⟞⟚⟢⃟`,
rows: [
{title: `⟐ Donasi ⟐`, rowId: ".donasi", description: "Donasi Agar Saya Semangat Untuk Update Bot:)"},
{title: `⟐ Sewa Bot ⟐`, rowId: ".sewa", description: "Mau Nyewa?"},
{title: `⟐ Script ⟐`, rowId: ".sc", description: "Menampilkan Script Bot Ini"},
]}]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tagnya = `@${m.sender.split`@`[0]}`

/*let tek = `*${ucapan()} @${m.sender.split`@`[0]}*
☰⃟⃟ᭁ═━┈━┈༓
┯┩
┡────────────┈ ⳹
┠━☰⃟⃟ᭁ「 *U s e rI n f o 克* 」
┋↬✗• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
║↬✗• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
╏↬✗• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╎↬✗• *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
╅╌┉┈┈╳
╭╼╼╼╼╼╼╼╼╺╴╴╳
┊ 「 *S t a t u sI n f o 比* 」
┊⧠ *ᴜᴘᴛɪᴍᴇ:* ${mpt}
┊⧠ *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
┊⧠ *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
┊⧠ *ʟɪᴍɪᴛ:* ${usrs.limit}
┊⧠ *ʟᴇᴠᴇʟ:* ${usrs.level}
┊⧠ *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
┗––––––––––––––––––✥
┊↬✗• *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
`*/
let con = `┏━━━━━━━━━━━━━━━━━━━┓
┆     List Menu ${namebot}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┛
┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼
┆ Hᴀʟᴏ ${tagnya}
┢╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╼
┣╌ ⟪ *Yᴏᴜʀ Iɴғᴏ* ⟫
┃▷ *Nᴀᴍᴇ* : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┃▷ *Sᴛᴀᴛᴜs* : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┃▷ *Pʀᴇᴍɪᴜᴍ* : ${usrs.premiumTime > 1 ? '✔ Ya': '✘ Tidak'}
┃▷ *Rᴏʟᴇ* : ${usrs.role}
┃▷ *Lɪᴍɪᴛ* : ${usrs.limit}
┃▷ *Lᴇᴠᴇʟ* : ${usrs.limit}
╰╴╴╴╳
▎▍▌▋▊▍▋▍▌▌▌▋▍▎▎▍▍▎▎▎▎▍
╭╴╴╼╳
│◇ Aʟʟ Fɪᴛᴜʀ: ${totalf}
╰╸╳`
let hariRayaramadan = new Date('April 21, 2023 23:59:59') 
     let sekarangg = new Date().getTime() 
     let lebih = hariRayaramadan - sekarangg 
     let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     let detikk = Math.floor( lebih % (1000 * 60) / 1000) 
let tett = `▢ ▱▱▱ ▣► Dᴀᴛᴇ ◄▣ ▱▱▱ ▢ 
▯▷ *Uᴘᴛɪᴍᴇ* : ${mpt}
▯▷ *Tɪᴍᴇ* :  ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
▯▷ *Tᴀɴɢɢᴀʟ Isʟᴀᴍ* : ${dateIslamic}
▢ ▱▱▱▱▱▱▱▱▱▱▱▱ ▢
`
let fot = `Nᴏᴛᴇ!! : Jɪᴋᴀ Aɴᴅᴀ Mᴇɴᴇᴍᴜᴋᴀɴ Bᴜɢ/Eʀʀᴏʀ 
Bɪsᴀ Rᴇᴘᴏʀᴛ Dᴇɴɢᴀɴ Cᴀʀᴀ ▻ ketik #report 
`
const listMessage = {
text: tett,
footer: fot,
mentions: await conn.parseMention(con),
title: con,
buttonText: `CLICK HERE ⎙`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(con), contextInfo:{ forwardingScore: 99999, isForwarded: true }}) 
}

let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

//------------------< MENU >----------------
let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: sgc,
    mediaType: 2, 
    description: sgc,
    title: "Kᴛɪᴋ .sᴏᴜɴᴅᴍᴇɴᴜ ᴜɴᴛᴋ ʏɢ ʟᴀɪɴ",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer(),
    sourceUrl: sgc
 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/
}
     }
    })
    
//------------------ menuny
let ownernya = `@${nomorown.split`@`[0]}`
let almenu = `
╭──────────⬣
│ *Hallo ${tagnya}*
╰─────────────────╮
╭─────────────────╯
│              *USER INFO*
├─────────────────⬣
├╮ *ɴᴀᴍᴇ* : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊│ *ʟᴇᴠᴇʟ:* ${usrs.level}
┊│ *ᴛɪᴇʀ:* ${usrs.role}
┊│ *ʟɪᴍɪᴛ:* ${usrs.limit}
┊│ *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊│ *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Ya': 'Tidak'}
┊╰─┬──────────────⬣
┊╭─╯        *BOT INFO*
┊│ *ᴛᴏᴛᴀʟ:* ${totalf} ғɪᴛᴜʀ
┊│ *ᴠᴇʀsɪᴏɴ:* V.42
┊│ *ʀᴇʟᴇᴀsᴇ:* 25 ɴᴏᴠᴇᴍʙᴇʀ 2021
┊│ *ᴏᴡɴᴇʀ:* ${ownernya}
┊│ *ᴍᴏᴅᴇ:* ${mode}
┊│ *ᴘʟᴀᴛғᴏʀᴍ:* ${platform}
┊│ *ᴛʏᴘᴇ:* Nodejs 
┊│ *ʙᴀɪʟᴇʏs:* Multi Device
┊│ *ᴘʀᴇғɪx:* ${_p}
┊│ *ᴜᴘᴛɪᴍᴇ:* ${mpt} 
├╯ *ᴅᴀᴛᴀʙᴀsᴇ:* ${totalreg}
╰─────────────────⬣
`
let nomorwa = '0'
let nomorowm1 = '6283896480283'
let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'text/rtf'
let td = `${pickRandom([d1,d2,d3,d4,d5])}`
let ᴛᴇs = `*_Powered By @${nomorwa.split`@`[0]}_*\n*_Creator Bot @${nomorown1.split`@`[0]}_*\n𝗗𝗔𝗧𝗘: ${week} ${date}\n𝗧𝗜𝗠𝗘: ${wktuwib}`
let thummb = fs.readFileSync('./thumbnail.jpg')

conn.send2ButtonDoc(m.chat, almenu, readMore + text + `${ᴛᴇs}` + readMore, '𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', '.sewa', '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: 'Jᴏɪɴ Mʏ Gᴄ Oғғɪᴄɪᴀʟ'}}})
    
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.command = /^(tesm|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}
