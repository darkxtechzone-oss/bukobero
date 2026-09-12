"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const ffmpegPath = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegPath);

/**
 * Converts a media buffer from one format to another using ffmpeg.
 * @param {Buffer} buffer     The input media buffer.
 * @param {string} inExt      Input file extension, e.g. "webp", "mp4".
 * @param {string} outExt     Output file extension, e.g. "mp3", "mp4".
 * @param {string[]} outputOptions  Extra ffmpeg output flags, e.g. ["-vn", "-ar", "44100"].
 * @returns {Promise<Buffer>} The converted media buffer.
 */
function convertBuffer(buffer, inExt, outExt, outputOptions = []) {
    return new Promise((resolve, reject) => {
        const tmpId = crypto.randomBytes(6).toString("hex");
        const inputPath = path.join(os.tmpdir(), `ffmpeg_in_${tmpId}.${inExt}`);
        const outputPath = path.join(os.tmpdir(), `ffmpeg_out_${tmpId}.${outExt}`);

        const cleanup = () => {
            fs.unlink(inputPath, () => {});
            fs.unlink(outputPath, () => {});
        };

        fs.writeFile(inputPath, buffer, (writeErr) => {
            if (writeErr) return reject(writeErr);

            ffmpeg(inputPath)
                .outputOptions(outputOptions)
                .on("error", (err) => {
                    cleanup();
                    reject(err);
                })
                .on("end", () => {
                    fs.readFile(outputPath, (readErr, data) => {
                        cleanup();
                        if (readErr) return reject(readErr);
                        resolve(data);
                    });
                })
                .save(outputPath);
        });
    });
}

module.exports = { convertBuffer };
