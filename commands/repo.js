"use strict";

module.exports = {
    command: ["repo", "script", "sc"],
    category: "info",

    execute: async (sock, m, { reply, config }) => {
        try {
            const link = config.repoUrl || "";
            const ownerNumber = config.ownerNumber;
            const ownerName = config.ownerName;
            const botName = `${config.botName} 👑`;

            const caption =
                `*╭━━━〔 👑 ${config.botName.toUpperCase()} 👑 〕━━━⬣*\n` +
                `*┃ ⚡ BOT NAME:* ${botName}\n` +
                `*┃ 👑 OWNER:* ${ownerName}\n` +
                `*┃ 📞 NUMBER:* wa.me/${ownerNumber}\n` +
                `*┃ 🚀 STATUS:* ONLINE\n` +
                `*┃ 🧠 ENGINE:* Smart Auto Response\n` +
                `*┃ 🔥 TYPE:* WhatsApp Assistant Bot\n` +
                `*╰━━━━━━━━━━━━━━━━━━⬣*\n\n` +
                (link ? `🔗 *Web Panel:*\n${link}\n\n` : "") +
                `> _Powerful • Fast • Clean_ 🔥\n\n` +
                `${config.watermark}`;

            await sock.sendMessage(m.chat, { text: caption }, { quoted: m });
        } catch (err) {
            console.error("Repo Command Error:", err);
            await sock.sendMessage(m.chat, { text: "❌ Repo command failed." }, { quoted: m });
        }
    },
};
