//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajlsczC1FuEGnm8cb2R";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajlsczC1FuEGnm8cb2R";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/876447705855fc88d0b21.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "916260273863";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk80OGt5b0pjWU81MDhkVWxxdzB1cXgvTEdzeWNwLzdrMGxva25tMlEzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWxjOTR3b0pPNlJFU2Q5L0ZkSUp0bVlONkhzWXYvL0h5RWIrVUFLODVDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ015TXJzaG1oYUtuMGZBNFM3UmVOUnI5TGdSbFpzU3BneU1aSWdjcjJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdW9yMmZ4RGg2U1R0RG1hS1dYVWxsRisvbWJITVlLUDBuZmFTUENLeWpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKdTV5QzBHQTRiTFdjS1hRMjdyUWVUemdPd3NzQnowdUNGalRtOEhpMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJLdTZVWHY3UTJVT05Pckt5cERWNmhFWjBCaTljR3p6SVZkWDNNdlMrWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU91YmhXdWNuMzdBZnprQWFoRW00eWxhUEhMOEVtWUpPdjA1MEgybGtsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVpRTlJKzdQSzVFLy93cENhVSticjByaWY2cmN3d3prNVpDdXRXVi9rUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJVQnpwaUhBQUw5VDZJZzBscTBtT2ZTeGF0RDZTWUgyMm93Z04vYnAvRjFtMnRCYkNoOTdaRWJiSitGTmQ1bTBDb1RZcEN0Vjc3Nm1xS212L2dybkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IndWM2JzZEtIc2VQYlRpa09yYkNuT2EzekdsSVRFVG5PYUx2bWpHOW5wYlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZNNl95VWFmUTBxY0FDYUZaSFVwM0EiLCJwaG9uZUlkIjoiMWRlMmYzYWMtNDQ3NC00NjNlLWI0M2YtZGY5OGVmMDAwMjFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuWWYwaDAzYVZoVHVOYWdjbmF6WkZOUGxQWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzeDV5VTRzNXFvdlVmbHdCaldDQU9GNTFvUkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVJTQzdGOTMiLCJtZSI6eyJpZCI6IjkxNjI2MDI3Mzg2MzoyOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqz8J2aqiDwnZCS8J2arvCdkJTwnZqp8J2arvCdmqvwnZqzIPCdkIrwnZCU8J2as/CdmqvwnZqqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJS0I0UFFERVByWHE3VUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVzNBYks5WGM1NXZQVjIvdWR2RGgyTDBaSUlXc0VCS253QThMSjhKbjBRPSIsImFjY291bnRTaWduYXR1cmUiOiJ3UHJyZzFrMk9tcWNHNkhuVEZwWGI5Zlo2S3BiemkzTTZZMElsM2lHV1VuVzlhYWMydjBWWGdtTkl3elZLakNKYzBMODFrb0pFcVh6SEF6TlhVeVNBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMFNKemhrNGhabjJxTis1NURqR2QrOTBlQ09PbVhqMjhna2tBTHZKVE96ajhLdHlkTThMeHZ3amt2aklmQmhQRU1WdW1OUDd0OVJhWWtjK3hDWWhpQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUZ0d0d5dlYzT2ViejFkdjduYnc0ZGk5R1NDRnJCQVNwOEFQQ3lmQ1o5RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ3NzU3NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBZ2cifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐁𝐘-MR-SHUBHAM-𝐕2😍",
  author: process.env.PACK_AUTHER || "SHUBHAM",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MR-SHUBHAM",
  ownername: process.env.OWNER_NAME || "MISTER_SHUBHAM",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
