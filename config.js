//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50936873601";
global.owner = process.env.OWNER_NUMBER || "50948156698";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1RMzc4K0F5TmRBSmdsQllVNVk4bmlrMlZ1c3hHeW8rY20wK2JMaHVtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3cxYUlYZ0UzZ0Z0ckdSaDhKVjYzSGxnT1UwUzRXYTkyZWk2cXhmWGdRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQXQrVWdzL0J1NGVRTjRRL1pKZUxUcUVibXUxTkRyVzVMT3FhQ2l4aFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPejkrZkh6dFB5NEJVVGs0elloUlRyNE9Mc0txWWhWODl4RC8xeXk2UFJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDSTRyeVAwNGo5VG5RQlhza0VsMTZmdzZ3UkJZYWl2RndUS3dWNUYzbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZTWktOVFBrZ1AwZzg1YlhUcU9DclVkZTVBV0Zocm0zUWszZU4yRzFHM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09qVGpTRXJwTHQ2dW4zTzYrZ1lxcllpNmhkODA5WGFjVWVkSUh3K0huZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHZSSmo2OThPcFhDUXpUNVdtM2Z1emxMR1VQV1J6OHpHNFVVSG1TcG5RWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KTTd4ay9JcVhyN0pHWEFtQXpGWnZlYnRJbS9aeGpUSkJrWGFtY0NBaS9vbHo4ODJ5d3dyL3JHZ0s4VEtKSnhDNUxoenpzeHVlS0VBUitwbDY0ZGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJzUS9XYjY5TnA1emtMMEJqdGowaytRMVNEeUVHaVlEZXkrNVM1VEwxQUR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5ajk4R1ZZeVJZLXB3clNOV1p1TkZBIiwicGhvbmVJZCI6ImFhZWYwM2IzLTIzYzgtNDkyNi05NmI4LTY2MmE5MTI5NzU3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeWFNeDh0RXBTVG5mZUI0dGdXSXlvYzJFNWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZ2WUlvV2tuZHFsOGFxUCt4RTJ5L05mYnE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktZM0VaR0xNIiwibWUiOnsiaWQiOiI1MDk0ODE1NjY5ODoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvITwnZeX8J2XnPCdl5TwnZeh8J2XlCDwlqOYIPCdl5TwnZeg8J2XlPCdl63wnZei8J2XoeGvvSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlNwb3BZR0VOTy95N2dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTStmZnZDaktobGlJYWZTTlN3NlZaeUdmNk5hSUJaMktBVkRvc0ZYZUxVWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZE5XY0FBaVFjbjN1WStsWDlaSEJTVEUvODhpVi9odTlDeDhQMWZZMlRsNkxVS2JLWlZKU1ZYVmR5VnREVXI0Q1htOHpBVi9iSkgyckpTd2NzTTlBQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBJSW5rNWxrSWlQcHVXZXk1RmpNL21Ib2wyaFBJaEs0SkJqNGVaZmFTTVNtWmYzdUNnTlZwUCt2bDZsUFJJWTErVE9tWTZlRU1rWUxzOGRMY3BaeGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDgxNTY2OTg6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFBuMzd3b3lvWllpR24walVzT2xXY2huK2pXaUFXZGlnRlE2TEJWM2kxRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI5MDIwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJY1AifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜DAMON⌝☜`",
  author: process.env.PACK_AUTHER || "DAMON",
  packname: process.env.PACK_NAME || "DAMON MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "DAMON",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
