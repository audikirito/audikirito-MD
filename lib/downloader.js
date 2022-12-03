const { fetchJson } = require('../tools/fetcher')
const { twitter } = require('video-url-link')
const { promisify } = require('util')
const config = require('../config.json')
const twtGetInfo = promisify(twitter.getInfo)



/**
 * Get Instagram media from URL.
 * @param {string} title 
 * @returns {Promise<object>} 
 */
const insta3 = (title) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${title}`)
    fetchJson(`https://api.lolhuman.xyz/api/igstory/${title}?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Bypass Google Drive from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const gdrivedl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/gdbypass?apikey=${config.vhtear}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Instagram media from URL.
 * @param {string} istalk 
 * @returns {Promise<object>} 
 */
 const igstalk = (istalk) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${istalk}`)
    fetchJson(`http://hujanapi.xyz/api/ig?username=${istalk}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} link 
 * @returns {Promise<object>} 
 */
 const apkpuredl = (link) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${link}`)
    fetchJson(`http://hujanapi.xyz/api/apkpuredl?url=${link}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pinterest media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const pinterestdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pinterest media from ${url}`)
    fetchJson(`https://api.vhtear.com/pinterestdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
 const pinterest = (query) => new Promise((resolve, reject) => {
    console.log(`Get Pinterest Search from ${query}`)
    fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${config.vhtear}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const kiryuuv2 = (query) => new Promise((resolve, reject) => {
    console.log(`Hasil pencarian manga kiryu = ${query}`)
    fetchJson(`http://hujanapi.xyz/api/kiryuu?query=${query}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const kiryuu = (url) => new Promise((resolve, reject) => {
    console.log(`Hasil pencarian Download kiryu = ${url}`)
    fetchJson(`http://hujanapi.xyz/api/kiryuudl?url=${url}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const kiryuuv3 = (url) => new Promise((resolve, reject) => {
    console.log(`Hasil pencarian Download kiryu = ${url}`)
    fetchJson(`http://hujanapi.xyz/api/kiryuuinfo?url=${url}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const ytdl2 = (url) => new Promise((resolve, reject) => {
    console.log(`Get Ytmp3 Ytmp4 media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${config.api}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
 const ytplay = (query) => new Promise((resolve, reject) => {
    console.log(`Get Ytplay media from https://api.lolhuman.xyz/api/ytplay?apikey=${config.vhtear}&query=${query}`)
    fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${config.vhtear}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} title 
 * @returns {Promise<object>} 
 */
const zp = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`http://hujanapi.xyz/api/zippydl?url=${url}&apikey=${config.api}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Instagram media from URL.
 * @param {string} title 
 * @returns {Promise<object>} 
 */
const insta2 = (title) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${title}`)
    fetchJson(`https://api.lolhuman.xyz/api/stalkig/${title}?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=Ninokutersayang&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
 const instav2 = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://naufalhoster.xyz/dl/instagram?apikey=Ninokutersayang&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook video from URL.
 * @param {String} url
 * @returns {Promise<object>} 
 */
const fb = (url) => new Promise((resolve, reject) => {
    console.log(`Get Facebook media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/facebook2?apikey=${config.naufalhoster}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${config.vhtear}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
 const ytdlv2 = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${config.vhtear}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Get Joox music metadata from title.
 * @param {string} title
 * @returns {Promise<object>} 
 */
const joox = (title) => new Promise((resolve, reject) => {
    console.log(`Get Joox music from ${title}...`)
    fetchJson(`https://api.vhtear.com/music?query=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tweet = (url) => new Promise((resolve, reject) => {
    console.log(`Get Twitter media from ${url}`)
    twtGetInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

/**
 * Get TikTok video with no WM.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tikNoWm = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok with no WM from ${url}`)
    fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${config.vhtear}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


 /**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
  const tiknowmv2 = (query) => new Promise((resolve, reject) => {
    console.log(`Downloading Spotify from ${query}`)
    fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${config.vhtear}&url=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
 })


/**
 * Get modded APK from moddroid.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const modroid = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=${config.vhtear}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const happymod = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Line sticker from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const line = (url) => new Promise((resolve, reject) => {
    console.log(`Get Line sticker from ${url}`)
    fetchJson(`https://api.vhtear.com/line_sticker_download?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const nhpdf = (query) => new Promise((resolve, reject) => {
    console.log(`Downloading Image H+ from ${query}`)
    fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${query}?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
 })

/**
 * Get modded APK from happymod.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Downloading xxx from ${url}`)
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
 })

 /**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const soundcloud = (query) => new Promise((resolve, reject) => {
    console.log(`Downloading Spotify from ${query}`)
    fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=${config.naufalhoster}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
 })
  const asupan = () => new Promise((resolve, reject) => {
    console.log(`Downloading Asupan`)
    fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey==${config.naufalhoster}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
 })

module.exports = {
    fb,
    ytdl,
    ytdlv2,
    tik,
    kiryuu,
    zp,
    kiryuuv2,
    kiryuuv3,
    joox,
    ytdl2,
    ytplay,
    gdrivedl,
    insta,
    instav2,
    pinterestdl,
    insta2,
    insta3,
    tweet,
    tikNoWm,
    modroid,
    happymod,
    line,
    nhpdf,
    xxx,
    soundcloud,
    apkpuredl,
    pinterest,
    tiknowmv2,
    igstalk,
    asupan
}
