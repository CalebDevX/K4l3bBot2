require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.ownernomer = process.env.OWNER_NOMER || "2348096567473";
global.ytname = process.env.YT_NAME || "YT: @Calebosky";
global.socialm = process.env.SOCIAL_M || "GitHub: CalebDevX";
global.location = process.env.LOCATION || "Nigeria, Abuja";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348096567473';
global.ownername = process.env.OWNER_NAME || 'Caleb';
global.botname = process.env.BOT_NAME || 'K4l3bBot';

// Default settings 
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(',') : ['', '!', '.', '#', '&'];
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'true'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/rK16XG8N/IMG-2347.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348096567473';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @Calebosky";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VbAfyp57dmeXh5trtY2W';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻K4l3b👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
