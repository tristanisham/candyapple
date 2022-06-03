import fs from 'fs'
import { replace } from 'grotto';

export function engine(filePath: string, options: object, callback: (err: any, render?: string | Buffer) => void): void {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        let render = content.toString();
        let guide = {};
        for (const [key, val] of Object.entries(options)) {
            if (key !== "settings" && key !== "_locals" && key !== "cache") {
               (guide as any)[key] = (options as any)[key]
            }

        }

        const result = replace(render, guide)

        // Object.entries(options).filter(([key, val]) => { key !== "settings" && key !== "_locals" && key !== "cache" }).map(([key, val]) => {
        //     const doubleBraceSelect: RegExp = new RegExp(`\{{2}${key}}}`, "g") // select all: `(?<=\{\{).*?(?=\}\})`
        //     render = render.replace(doubleBraceSelect, val)
        // })
        callback(null, result)
    })
}
// export function renderFile() {
//     return grotto
// }

// function grotto
// }