"use strict";

const fs = require("fs");
const path = require("path");

module.exports = {
    command: ["menu", "help", "mainmenu", "hali"],
    category: "main",

    execute: async (sock, m, { reply, config }) => {
        try {
            const pluginFolder = path.join(__dirname); // this folder IS the commands folder
            const pluginFiles = fs.readdirSync(pluginFolder).filter((f) => f.endsWith(".js"));

            const runtime = process.uptime();
            const h = Math.floor(runtime / 3600);
            const min = Math.floor((runtime % 3600) / 60);
            const s = Math.floor(runtime % 60);

            let menuText = "";
            menuText += `📌 ${config.botName}\n`;
            menuText += `──────────────────\n`;
            menuText += `👤 Owner   : ${config.ownerName}\n`;
            menuText += `📅 Date    : ${new Date().toLocaleDateString()}\n`;
            menuText += `⏱ Runtime : ${h}h ${min}m ${s}s\n`;
            menuText += `📂 Commands: ${pluginFiles.length}\n`;
            menuText += `📶 Status  : Online\n`;
            menuText += `──────────────────\n\n`;

            // Group every command by its category — every command works,
            // there's no locking of any kind.
            const categories = {};
            for (const file of pluginFiles) {
                try {
                    const pluginPath = path.join(pluginFolder, file);
                    delete require.cache[require.resolve(pluginPath)];
                    const plugin = require(pluginPath);

                    if (!plugin.command) continue;
                    if (plugin.ownerOnly === true) continue;

                    const name = Array.isArray(plugin.command) ? plugin.command[0] : plugin.command;
                    const cat = plugin.category ? plugin.category.toUpperCase() : "OTHER";

                    if (!categories[cat]) categories[cat] = [];
                    categories[cat].push(name);
                } catch {
                    continue;
                }
            }

            for (const cat of Object.keys(categories).sort()) {
                menuText += `🔹 ${cat}\n`;
                for (const name of categories[cat].sort()) {
                    menuText += `   • ${config.prefix}${name}\n`;
                }
                menuText += `\n`;
            }

            menuText += `──────────────────\n`;
            menuText += `${config.watermark}`;

            // Text-only — no image, no audio.
            await sock.sendMessage(m.chat, { text: menuText }, { quoted: m });
        } catch (err) {
            console.error("MENU ERROR:", err);
            reply("❌ Menu failed to load.");
        }
    },
};
