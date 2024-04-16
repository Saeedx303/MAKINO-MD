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
global.website = 'https://github.com/Saeedx303/MAKINO-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/e5b29dffef8407a6f580c.png'
module.exports = {
  wapresence: process.env.WAPRESENCE || "recording",// recording,composing,available,unavailable
  sessionName: process.env.SESSION_ID || "",      //Put Your Session Id Here
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
 
