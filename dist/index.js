"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.engine = void 0;
const fs_1 = __importDefault(require("fs"));
const grotto_1 = require("grotto");
function engine(filePath, options, callback) {
    fs_1.default.readFile(filePath, (err, content) => {
        if (err)
            return callback(err);
        let render = content.toString();
        let guide = {};
        for (const [key, val] of Object.entries(options)) {
            if (key !== "settings" && key !== "_locals" && key !== "cache") {
                guide[key] = options[key];
            }
        }
        const result = (0, grotto_1.replace)(render, guide);
        // Object.entries(options).filter(([key, val]) => { key !== "settings" && key !== "_locals" && key !== "cache" }).map(([key, val]) => {
        //     const doubleBraceSelect: RegExp = new RegExp(`\{{2}${key}}}`, "g") // select all: `(?<=\{\{).*?(?=\}\})`
        //     render = render.replace(doubleBraceSelect, val)
        // })
        callback(null, result);
    });
}
exports.engine = engine;
// export function renderFile() {
//     return grotto
// }
// function grotto
// }
