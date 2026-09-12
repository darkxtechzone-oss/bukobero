# DARKX-ULTRA 2026/27

Multi-device WhatsApp bot with a simple web dashboard for pairing and
settings. **This software provided by DarkX Team** — see [LICENSE](#license)
below.

## Features

- 🔗 Pair up to **5 WhatsApp numbers at once** (see `MAX_SESSIONS`)
- ⚙️ Simple web dashboard: **Link Device** + **Login / Settings** only — no
  admin panel, no subscriptions, no payments
- 🧩 Full command set (75+ plugins) — everything is open to everyone by
  default, nothing is locked behind a plan
- 👤 You set your own owner number, bot name, and prefix from the web
  Settings panel — nothing is hardcoded

## Project structure

This project is intentionally **flat** — every engine/library file lives
directly in the project root. The only folder is `command/`, which holds
every bot command (plugin).

```
index.js            → multi-session WhatsApp engine
message.js            → command dispatcher (loads everything in /command)
start.js                → entry point (web server + socket.io)
config.js                 → base settings (edit MAX_SESSIONS etc. here or via env)
settingsStore.js            → per-number settings (owner, prefix, reactions...)
serialize.js                  → raw Baileys message → convenient "m" object
mongo.js / mongoAuthState.js    → MongoDB-backed session storage
database.js                       → group data (welcome/goodbye/mute/warn)
brain.js                            → simple AI auto-reply (.aion / .aioff)
function.js / media.js / mediaVault.js / userMongo.js → utility helpers
ffmpeg.js                             → audio/video conversion helper
index.html / app.js / routes.js / socket.js → the web dashboard
license.html                           → the license page (see below)
command/                                → all 75+ bot commands live here
```

## Running it

1. `npm install`
2. Set the `MONGODB_URI` environment variable to your own MongoDB
   connection string (this project never falls back to a shared database).
3. `npm start`
4. Open the web address shown in the console → **Link Device** → enter your
   WhatsApp number → enter the pairing code on WhatsApp → Linked Devices.
5. Go to **Login / Settings** any time afterwards to set your bot's name,
   owner number, prefix, and reaction behavior.

## Session limit

This bot allows at most `MAX_SESSIONS` linked WhatsApp numbers at once
(default: 5). Set a different value via the `MAX_SESSIONS` environment
variable.

## The `.menu` command

Every time `.menu` runs, it lists every available command and ends with:

> This software provided by DarkX Team

This line is not configurable from the dashboard — it always appears,
per the license below.

## License

See [`license.html`](./license.html) (also served at `/license` once the
bot is running). In short:

- **This software provided by DarkX Team.**
- You may **not** sell or resell this software.
- You may **not** modify and redistribute it as your own product.
- You may **not** remove the "This software provided by DarkX Team"
  credit from the dashboard or the `.menu` command.

## Community

💬 Join the WhatsApp group: https://chat.whatsapp.com/J5t4uR9W99m8DJXNisMzdr

---
This software provided by DarkX Team.
