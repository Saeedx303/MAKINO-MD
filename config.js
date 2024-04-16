const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923137183974'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'tsuncc.a9@gmail.com'
global.github = 'https://github.com/saeedx303/MAKINO-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/Saeedx304/' // add your username
global.sudo = process.env.SUDO || "923477008403"
global.devs = '923120443386'
global.website = 'https://github.com/Saeedx303/MAKINO-MD' //wa.me/+923120443386
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/e5b29dffef8407a6f580c.png'
module.exports = {
  wapresence: process.env.WAPRESENCE || "recording",// recording,composing,available,unavailable
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tQQitqSldhcGpKZUsvMDlRNG4remNLWFVsMTBLM1U5cGRIckF4QU9FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFVUS2hTN0Z5RFNrRksyM0tGSTdnYzFuQ3BidHErYWlGRThpcDV3dFZTbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQU81Rkcrck8ramtMWkNyUVJBUERLWEZNZWZpZFBpWWlnTmlkdFdYTW4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaaHJHWkpDUW1nMENrK0ZsV1duY0Yrc0tjQjZFSmdXenRUYzJRSEpPN2hJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OMThvOURiblhtYXY2cTZubkcySHpKMFJ1dGQvKzljd1hzbjJjNFBUR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI0YWFuYmc0NjdVeE5BQU81aGpPYndEUERHTG5vMFJLcDJDZ0xzb0h0WDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyajFpb1pqTTd6ajRFakE5Z1kvVU9wckQxOEZNZzZ3cEc1Q1hHRHZ3ekdrdUJyMWJLUTZNY0FNMXJSNTI3MWdCa2FHT0MyR01YcGIwOWNoR0xoVE9nZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjg5LCJhZHZTZWNyZXRLZXkiOiI5NFFwRm12N1NhazNhS0xXckZNMDhyc1NqSVFhN0JnQXlaZ2xoQWkwTFo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBdFpWczBHblM2LV9uQ25wZHE4LWt3IiwicGhvbmVJZCI6ImM1MTgxMWVlLWUyMjMtNDU0Zi1iMTExLTM0NWRkYTU5ZmIxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5MFBKUnF2VEptb0ZWZ20wTzZWYnJMOG5zWVk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZaWWhXczBCZTdpRUJFM0dEQmgxZFNYdWZrQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Buc3dxOEhFT0dZOTdBR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFLZnpSY2JLUlNkQUY4cm1pam5zemhsWjlDeisrWEZFdU83bXpBcDA0VG89IiwiYWNjb3VudFNpZ25hdHVyZSI6InZKTVlYNUJqODM5MUhGMFlNTGM0M1VUMVd5bmhPM2JNYzZHZ3kvNCt0VDE4Z0wrTHhqRlNJd0t2SzZpT2NlMFlCbE9IZG9EM3ZkQmVZV0ZLaHUzNkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvNnFMZGVORjVIdjloWGNCNW9GVDIxNzFnN09JVUtlcWt2aVVJV3F6aDZuYUk0a29nVy9LODF0d0NyK0VRSURPMnhvME02Nk9kVWRCdFhsakNWUHdndz09In0sIm1lIjp7ImlkIjoiOTIzMTIwNDQzMzg2OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IklNUkFOS0hBTiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjA0NDMzODY6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUNuODBYR3lrVW5RQmZLNW9vNTdNNFpXZlFzL3ZseFJManU1c3dLZE9FNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMzIyODg5OX0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SAEED NISAR',
  packname:  process.env.PACK_NAME || 'BABLI-MD ',
  numversion:  process.env.BOT_VERSION || '1.1',
  botname:   process.env.BOT_NAME === undefined ? "BABLI-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SAEED×NISAR' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '124' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '*' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 9 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI BABLI 💖 I AM ZINDA HU' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ BABLI-MD•* ",   //『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ x』*\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false: process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'd0216e9e-781d-4d00-8dbe-d8aaa86b8068' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'makino2md' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '1.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'NAZUKO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
