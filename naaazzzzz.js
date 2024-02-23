/**
	* Di buat oleh Naaazzzzz
	* Contact Me on wa.me/6282139672290
	* © Slemek Community
**/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, makeInMemoryStore, jidNormalizedUser, delay } = require('@whiskeysockets/baileys')
const pino = require('pino') 
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const moment = require('moment-timezone')
const cheerio = require('cheerio') 
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
module.exports = conn = async (conn, m, chatUpdate, store) => {
   try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime) 
        const uptime = await runtime(process.uptime())
         const isBanned = global.db.data.user[m.sender]?.banned ?? false
         
         
         
         
         
         // Group
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    
    switch(command) {
    	case '>': {
    	if(!isCreator) return m.reply(mess.owner) 
    	if(!text) return m.reply('kodenya mana?') 
    	let anu = await eval(text) 
    m.reply(util.format(anu)) 
    }
    break
    	case 'menu': {
conn.sendPoll(m.chat, '© Slemek Community', ['Slemek-Community','Naaazzzzz']) 
    }
    break
    case 'slemek-community': {
    	m.reply('https://chat.whatsapp.com/Ftk1hl3l84EBSHI2mF7Dw3') 
    }
    break
    case 'naaazzzzz': {
    	m.reply('wa.me/6282139672290') 
    }
    break
    }
         } catch (err) {
        m.reply(util.format(err))
    }
   }
   
         let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
