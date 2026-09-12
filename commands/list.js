"use strict";

module.exports = {
    command: ["list", "price", "1", "2", "3", "4", "5"],
    category: "business",

    execute: async (sock, m, { config }) => {
        try {
            const input = m.body.trim().replace(config.prefix, "");

            if (input === "list" || input === "price") {
                const businessList =
                    `┏━━━━━━━◥◣◆◢◤━━━━━━━┓\n` +
                    `     *DΛЯKX SӨᄂЦƬIӨПS*\n` +
                    `┗━━━━━━━◥◣◆◢◤━━━━━━━┛\n\n` +
                    `*〔 👤 Oᴡɴᴇʀ 〕:* ${config.ownerName}\n` +
                    `*〔 📊 Sᴛᴀᴛᴜs 〕:* ᴀᴄᴛɪᴠᴇ ✅\n` +
                    `*〔 🛠️ Exᴘᴇʀᴛɪsᴇ 〕:* ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ\n\n` +
                    `*SΞLΞCƬ Λ SΞЯVICΞ BΞLӨW:*\n` +
                    `_Reply with the number to view more info_\n\n` +
                    `⒈ ➜ 𝖶𝗁𝖺𝗍𝗌𝖠𝗉𝗉 𝖡𝗈𝗍 𝖬𝗈𝖽\n` +
                    `⒉ ➜ 𝖠𝖽-𝖥𝗋𝖾𝖾 𝖡𝗈𝗍 𝖤𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾\n` +
                    `⒊ ➜ 𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖶𝖾𝖻𝗌𝗂𝗍𝖾 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍\n` +
                    `⒋ ➜ 𝖠𝖽𝗏𝖺𝗇𝖼𝖾𝖽 𝖢𝗒𝖻𝖾𝗋-𝖲𝖾𝖼𝗎𝗋𝗂𝗍𝗒\n` +
                    `⒌ ➜ 𝖶𝖾𝖻 𝖢𝗋𝖾𝖺𝗍𝗂𝗈𝗇 𝖬𝖺𝗌𝗍𝖾𝗋𝖼𝗅𝖺𝗌𝗌\n\n` +
                    `> *"Innovation is our language, Excellence is our standard."*\n` +
                    `${config.watermark}`;

                return await sock.sendMessage(m.chat, { text: businessList }, { quoted: m });
            }

            let details = "";
            if (input === "1") {
                details =
                    `*◤ 𝖶𝗁𝖺𝗍𝗌𝖠𝗉𝗉 𝖡𝗈𝗍 𝖬𝗈𝖽 ◢*\n\n` +
                    `*ＤＥＳＣＲＩＰＴＩＯＮ:*\nA highly optimized WhatsApp automation framework. Built for speed, security, and multiple features.\n\n` +
                    `*ＫΞＹ ＦΞΛＴＵＲΞＳ:*\n• Antilink & Antidelete System\n• AI Integration\n• Media Downloader (YT/FB/IG)\n\n` +
                    `*ＩＮＶΞＳＴＭΞＮＴ:*\n💰 10,000 TZS`;
            } else if (input === "2") {
                details =
                    `*◤ 𝖠𝖽-𝖥𝗋𝖾𝖾 𝖡𝗈𝗍 𝖤𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 ◢*\n\n` +
                    `*ＤＥＳＣＲＩＰＴＩＯＮ:*\nComplete removal of all external advertisements and promotional watermarks from your bot.\n\n` +
                    `*ＢΞＮΞＦＩＴＳ:*\n• Full Branding Control\n• Clean User Interface\n• Faster Response Times\n\n` +
                    `*ＩＮＶΞＳＴＭΞＮＴ:*\n💰 25,000 TZS`;
            } else if (input === "3") {
                details =
                    `*◤ 𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖶𝖾𝖻𝗌𝗂𝗍𝖾 𝖣𝖾𝗏 ◢*\n\n` +
                    `*ＤＥＳＣＲＩＰＴＩＯＮ:*\nCustom web solutions ranging from Portfolio sites to E-commerce systems.\n\n` +
                    `*ＴＩΞＲＳ:*\n• *Standard (Ads):* 50,000 TZS (Starting)\n• *Enterprise (Clean):* 100,000 TZS`;
            } else if (input === "4") {
                details =
                    `*◤ 𝖠𝖽𝗏𝖺𝗇𝖼𝖾𝖽 𝖢𝗒𝖻𝖾𝗋-𝖲𝖾𝖼𝗎𝗋𝗂𝗍𝗒 ◢*\n\n` +
                    `*ＳΞＲＶＩＣΞＳ:*\n• Penetration Testing\n• Account Recovery Audits\n• System Hardening\n\n` +
                    `*ＩＮＶΞＳＴＭΞＮＴ:*\n💰 Negotiable (Consultation Required)`;
            } else if (input === "5") {
                details =
                    `*◤ 𝖶𝖾𝖻 𝖢𝗋𝖾𝖺𝗍𝗂𝗈𝗇 𝖬𝖺𝗌𝗍𝖾𝗋𝖼𝗅𝖺𝗌𝗌 ◢*\n\n` +
                    `*ＬΞΛＲＮＩＮＧ ＰΛＴＨ:*\nLearn Frontend & Backend development from scratch. No coding experience needed.\n\n` +
                    `*ＩＮＶΞＳＴＭΞＮＴ:*\n💰 Negotiable`;
            }

            if (details) {
                await sock.sendMessage(m.chat, { text: details }, { quoted: m });
            }
        } catch (err) {
            console.error("Business List Error:", err);
        }
    },
};
