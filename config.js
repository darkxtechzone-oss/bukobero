"use strict";

/**
 * Project: Bukobero jr
 * Base / default configuration.
 *
 * NOTE: these are just the defaults used the very first time a number is
 * connected. Once a number is linked, its real settings (owner number,
 * owner name, bot name, status emojis, anti-link, etc.) live in
 * sessionSettings.json via settingsStore.js, and can be changed any time
 * from the web settings panel — the user sets their own owner info, it's
 * never hardcoded here.
 */

module.exports = {
    // --- BASIC BOT INFO ---
    botName: "Bukobero jr",
    ownerName: "Owner",
    ownerNumber: "", // left empty on purpose — each user sets their own from the web Settings panel
    prefix: ".",

    // --- WEB PANEL LINK (shown by the .repo command) ---
    repoUrl: process.env.WEB_URL || process.env.RENDER_EXTERNAL_URL || "",

    // --- GLOBAL SESSION LIMIT ---
    // The whole bot (across every linked number) may never have more than
    // this many WhatsApp numbers connected at once.
    MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS || "5", 10),

    // --- BOT MODES & BEHAVIOR ---
    public: true,
    online: true,

    // --- SECURITY & LIMITS ---
    limitCount: 20,
    adminOnly: false,
    WARN_COUNT: 3,

    // --- ANTI-DELETE FEATURE (default OFF until enabled) ---
    antiDelete: false,
    antiDeleteNotifyOwner: true,

    // --- ANTI-LINK FEATURE (default OFF until enabled) ---
    antilink: false,

    // --- AUTO STATUS FEATURES ---
    autoViewStatus: true,
    autoReactStatus: true,
    statusEmojis: ["🔥", "💎", "💜", "❤️", "💙", "💚", "💖"],

    // --- AUTO CHAT FEATURES ---
    autoReadChat: false,
    autoReactChat: true,
    chatEmojis: ["😆", "😱", "😂", "🤫", "👍"],

    // --- AUTO PRESENCE FEATURES ---
    autoTyping: true,
    autoRecording: false,

    // --- VISUALS & METADATA ---
    version: "1.0.0",
    worktype: "public",
    // This exact line is what shows at the bottom of the web panel AND at
    // the end of every .menu message — do not change without instruction.
    watermark: "This software provided by DarkX Team",
    footer: "This software provided by DarkX Team",
    thumb: "https://files.catbox.moe/pc5uec.png",

    // --- COMMUNITY ---
    whatsappGroupLink: "https://chat.whatsapp.com/J5t4uR9W99m8DJXNisMzdr",

    // --- MESSAGES (English) ---
    msg: {
        owner: "🚫 This command can only be used by the bot owner!",
        group: "👥 Sorry, this command only works in groups.",
        admin: "👮 This command requires you to be a group *Admin*.",
        botAdmin: "🤖 Please make me an *Admin* first so I can do this.",
        wait: "⏳ *Bukobero jr is processing...* Please wait.",
        error: "❌ *Error!* Something went wrong in the system.",
    },
};
