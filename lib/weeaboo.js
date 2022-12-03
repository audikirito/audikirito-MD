const { fetchJson, fetchText } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get anime info from Kusonime.
 * @param {string} title
 * @returns {Promise<object>}
 */
const kusonime = (title) => new Promise((resolve, reject) => {
    console.log(`Get anime info from Kusonime for ${title}...`)
    fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${config.vhtear}&query=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get anime info from Kusonime.
 * @param {string} title
 * @returns {Promise<object>}
 */
 const otakudesu = (title) => new Promise((resolve, reject) => {
    console.log(`Get anime info from otakudesu for ${title}...`)
    fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${config.api}&query=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get manga info from Komiku.
 * @param {string} title
 * @returns {Promise<object>}
 */
const manga = (title) => new Promise((resolve, reject) => {
    console.log(`Get manga info from Komiku for ${title}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/komiku?q=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random waifu image.
 * @param {boolean} [nsfw=false]
 * @returns {Promise<object>}
 */
const waifu = (nsfw) => new Promise((resolve, reject) => {
    if (nsfw === true) {
        console.log('Get NSFW waifu image...')
        fetchJson('https://waifu.pics/api/nsfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    } else {
        console.log('Get SFW waifu image...')
        fetchJson('https://waifu.pics/api/sfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    }
})

/**
 * Search for anime source from image.
 * @param {Buffer} imageBase64 
 * @returns {Promise<object>}
 */
const wait = (imageBase64) => new Promise((resolve, reject) => {
    console.log('Searching for anime source...')
    fetchJson('https://trace.moe/api/search', {
        method: 'POST',
        body: JSON.stringify({ image: imageBase64 }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anitoki latest update.
 * @returns {Promise<object>}
 */
const anitoki = () => new Promise((resolve, reject) => {
    console.log('Get Anitoki latest update...')
    fetchJson(`https://melodicxt.herokuapp.com/api/anitoki?apiKey=${config.melodic}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Neonime latest update.
 * @param {string} query
 * @returns {Promise<object>}
 */
const neonime = (query) => new Promise((resolve, reject) => {
    console.log(`Get Neonime Downloader ${query}...`)
    fetchJson(`https://api.vhtear.com/neonime_search?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Neonime latest update.
 * @param {string} url
 * @returns {Promise<object>}
 */
 const neonimev2 = (url) => new Promise((resolve, reject) => {
    console.log(`Get Neonime Downloader ${url}...`)
    fetchJson(`https://api.vhtear.com/neonime_downloads?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Promise<object>}
 */
const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://api.vhtear.com/ongoinganoboy&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Promise<object>}
 */
 const anoboydl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Anoboy Link Downloade ${url}...`)
    fetchJson(`http://hujanapi.xyz/api/anoboydl?url=${url}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Loli pict.
 * @returns {Promise<object>}
 */
const loli = () => new Promise((resolve, reject) => {
    console.log('Get Loli pict...')
    fetchJson(`https://api.lolhuman.xyz/api/random/loli?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Anoboy anime on-going list.
 * @returns {Promise<object>}
 */
const Nekopoi = (query) => new Promise((resolve, reject) => {
    console.log(`Get Nekopoi on-going ${query}...`)
    fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${config.vhtear}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Promise<object>}
 */
 const Nekopoidl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Nekopoi on-going ${url}...`)
    fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${config.vhtear}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Random anime sticker
 * @returns {string}
 */
const snime = () => new Promise((resolve, reject) => {
    console.log('Get anime sticker...')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    kusonime,
    manga,
    waifu,
    wait,
    anitoki,
    neonime,
    anoboy,
    anoboydl,
    snime,
    Nekopoi,
    Nekopoidl,
    loli,
    neonimev2,
    otakudesu
}
