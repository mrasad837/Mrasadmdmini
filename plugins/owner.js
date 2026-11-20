// ============================================
// 👑 OWNER - MISHU QUEEN
// 👑 Developer: ᴀʀꜱʟᴀɴ-ᴍᴅ
// 💖 Girl Power Mode: ON
// 📌 Owner info + Developer commands
// ============================================

const { mishu } = require('../mishu');
const { sendInteractiveMessage } = require('gifted-btns');
const config = require('../config');
const fs = require('fs');
const path = require('path');
const { runtime, sleep } = require('../lib/functions');

// ============================================
// 📌 DEVELOPER INFO
// ============================================
const DEV_INFO = {
    name: "ᴍʀᴀsᴀᴅ-ᴍᴅ",
    number: "923415852837",
    channel: "https://whatsapp.com/channel/0029VbEGNsnAjPXGtkhIAL3G",
    group: "https://chat.whatsapp.com/KCGPeSBdN4d0E7qfQptONd",
    github: "https://github.com/mrasad837",
    website: "xxx.asadkalove",
    repo: "https://github.com/Mrasadmdmini"
};

// ============================================
// 👑 OWNER / DEVELOPER INFO COMMAND
// ============================================
mishu({
    pattern: "owner",
    alias: ["creator", "dev", "developer", "about"],
    desc: "🌸 Get developer/owner information",
    category: "info",
    react: "👑",
    filename: __filename
}, async (mishu, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const botName = config.BOT_NAME || "🌸 MRASAD-MD 🌸";

        const text = `
╭═══✿══════════════╗
│  ✿ 👑 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ✿
│  ✿━━━━━━━━━━━━━━━✿
│  ✿ 🤖 Bot: ${botName}
│  ✿ 👤 Name: ${DEV_INFO.name}
│  ✿ 📱 Contact: ${DEV_INFO.number}
│  ✿ ⏳ Uptime: ${uptime}
╰═══✿══════════════╝

💖 *Contact Developer:*
wa.me/${DEV_INFO.number}

💖 *Join Channel:*
${DEV_INFO.channel}

💖 *Join Group:*
${DEV_INFO.group}

💖 *GitHub:*
${DEV_INFO.github}

💖 *Website:*
${DEV_INFO.website}

🌸 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝙈𝙍𝘼𝙎𝘼𝘿-𝙈𝘿 💖
        `.trim();

        // ── Send with Buttons ──
        await sendInteractiveMessage(mishu, from, {
            text: text,
            footer: `💖 ${botName}`,
            interactiveButtons: [
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '📱 CONTACT OWNER',
                        url: `https://wa.me/${DEV_INFO.number}`
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '🎀 CHANNEL',
                        url: DEV_INFO.channel
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '👥 GROUP',
                        url: DEV_INFO.group
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '💻 GITHUB',
                        url: DEV_INFO.github
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '🌐 WEBSITE',
                        url: DEV_INFO.website
                    })
                }
            ]
        });

    } catch (error) {
        console.error('🌸 Owner Error:', error);
        reply(`❌ Error: ${error.message}`);
    }
});

// ============================================
// 👑 SHUTDOWN / RESTART COMMAND
// ============================================
mishu({
    pattern: "shutdown",
    alias: ["restart", "reboot"],
    desc: "👑 Restart the bot (Owner only)",
    category: "owner",
    react: "🔄",
    filename: __filename
}, async (mishu, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("🌸 *Access Denied!* 💕\n\nOnly owner can use this command.");

    await reply("🔄 *Restarting bot...* Please wait! 💖");
    await sleep(2000);
    process.exit(0);
});
