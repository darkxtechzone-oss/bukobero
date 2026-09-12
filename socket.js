"use strict";

/**
 * Project: Bukobero jr
 * Socket.IO bridge between the web pairing page and the bot engine.
 */

const { startBot, activeSockets, mongoSessionExists, removeMongoSession, isAtSessionLimit } = require('./index');
const config = require('./config');

module.exports = function registerSocketHandlers(io) {
    io.on('connection', (socket) => {
        console.log('🎀 A browser connected to the pairing page.');

        socket.on('pair-request', async (rawNumber) => {
            try {
                const number = String(rawNumber || '').replace(/[^0-9]/g, '');

                if (!number || number.length < 9) {
                    socket.emit('pairing-error', { error: 'Please enter a valid phone number with country code (e.g. 2557XXXXXXXX)' });
                    return;
                }

                if (activeSockets[number]) {
                    socket.emit('pairing-error', { error: 'This number is already paired and connected.' });
                    return;
                }

                // Global cap: the whole bot may never have more than
                // config.MAX_SESSIONS numbers linked at once. Re-linking a
                // number that's already known doesn't count against this,
                // since it isn't adding a brand-new session.
                const alreadyKnown = await mongoSessionExists(number);
                if (!alreadyKnown && (await isAtSessionLimit())) {
                    socket.emit('pairing-error', {
                        error: `This bot is limited to ${config.MAX_SESSIONS} linked number(s) in total. Please try again later or remove an existing number first.`,
                    });
                    return;
                }

                // If this number already has a saved session in MongoDB (e.g. an
                // old/broken one, or someone re-linking), wipe it first so we
                // always hand out a genuinely fresh pairing code instead of
                // getting stuck on stale credentials.
                if (alreadyKnown) {
                    socket.emit('status', { message: `♻️ Found an existing session for ${number}, resetting it first...` });
                    await removeMongoSession(number);
                }

                socket.emit('status', { message: `✨ Generating your pairing code for ${number}...` });

                await startBot(number, io, (code) => {
                    socket.emit('pairing-code', { number, code });
                });
            } catch (err) {
                socket.emit('pairing-error', { error: err.message });
            }
        });

        socket.on('disconnect', () => {
            console.log('👋 A browser disconnected from the pairing page.');
        });
    });
};
