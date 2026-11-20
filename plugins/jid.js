// ============================================
// 🌸 JID - MISHU QUEEN
// 👑 Developer: ᴀʀꜱʟᴀɴ-ᴍᴅ
// 💖 Girl Power Mode: ON
// ============================================

const { mishu } = require('../mishu');

mishu({
    pattern: "jid",
    alias: ["id", "chatid", "gjid"],
    desc: "🌸 Get full JID of current chat (Queen Only)",
    category: "owner",
    react: "🌸",
    filename: __filename
}, async (mishu, mek, m, { from, isGroup, isOwner, isCreator, reply, sender }) => {
    try {
        if (!isOwner && !isCreator) {
            return reply(`🌸 Only my Queen can use this! 👸💖`);
        }

        if (isGroup) {
            return reply(`👥 *Group JID:*\n\`\`\`${from}\`\`\``);
        } else {
            return reply(`👤 *User JID:*\n\`\`\`${sender}\`\`\``);
        }

    } catch (e) {
        console.error("🌸 JID Error:", e);
        reply(`⚠️ Error: ${e.message}`);
    }
});

console.log('🌸 MR ASAD - JID plugin loaded! 💖');
