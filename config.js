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
global.wlcm = process.env.WELCOME || "false";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JrMndIVURpUmJRTWtaMFozOG80TzRJYUFDcVJ6dUY1bXVwUXZLK21IQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXgxK0Z2bTJOUmZRckJUMzJDamlVNmhvNnZrMDR0Tm83Q0ZCSWhjejh6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SWtmczA0aWVyZnd6bHM5U3kwRG93ZTlvaWRPWDhEN1NNU1U0QjBEdlhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5OSsxeENNYUEvYVkvQTBWVlpUemRUTDJsZSt2TmVVNHFZczlhZUVUeUdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFTk9SSmwvendRdElFcDNBSXQ5aHo5THY2ZTlrQzBHWENSZ3dKQmg2MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBeUVoRC9GVkVNeFY0enRHZE5OekNSRk9xNmN2OXIzNWlRdUlqNDZyQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9hRWRFUUdzdEYvdXcyWEpidzA2RlY2TnpJQUl6NDVQN0JDRXRmcWJHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianBmMy9IRDlZTDZMdU9Zc3ZvNU1UQkhqdFo4Uy9Nb1U5cVM3R0hualJ3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdhU1RxSG9USDBXMFRPZ2RyQWlxZmpBakRXNW1LZElGbk9mZy9xWGkvd2pmSnQ0Zm5ldmxUY2ZadG9PMHNCOEFrblF0ZUZJUHUvVE8zaWwrQTdKWUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiI5ekRrUmwvM3RNYTZzWHc2ZTFrd2tVN3Q3S3Bzdm0rcjMyYkZxWENObGJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUd0xhTlh0cFJxdXlFMzc1cEtOWUJ3IiwicGhvbmVJZCI6ImQ3ZDM0MGEyLTc1MGUtNGY1MS04MmU0LWIxMzNhNzA2ODAzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVL1RySjhySTRaWmFpbjhIclBvcjhCYXNCWkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXIzNEhuUklFMFhoWGsxZi9vaHlEc3VNMVFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg0OEpCOTczIiwibWUiOnsiaWQiOiI1MDk0ODE1NjY5ODo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmL3wnZi88J2Yv+KAovCdmYLwnZmE8J2ZjfCdmYfhr74ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015cG9wWUdFSm10c3JnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik0rZmZ2Q2pLaGxpSWFmU05TdzZWWnlHZjZOYUlCWjJLQVZEb3NGWGVMVVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNQZzV2OHVpcFNidEVZMVZ3THMyWm82b2EvL1NpTWlvNjNvMjl5ZFdWWDZqc0lnQjBEc3QvSGdJUHBiMDBPdENFY3IvMFJpRmI2eW9Mc25TWXN4UkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2aU5NNlVnNmlxTG9rSlZYKzk0akFEeFVJbHRWNDJheGFTaGd5eWdmdnpuQTdxY2d0Z2ltN2NBYVRkZi9kN2xlTXU3U2tGN1ZlZzJRQlRBV3V0K0ZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ4MTU2Njk4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFBuMzd3b3lvWllpR24walVzT2xXY2huK2pXaUFXZGlnRlE2TEJWM2kxRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODg3ODI0Nn0="
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
