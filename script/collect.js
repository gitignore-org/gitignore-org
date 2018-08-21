#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const download = require('download')
const walk = require('walk-sync').entries

const platform = ["macOS", "Windows", "Linux"]

const editor = ["Xcode", "Vim", "VisualStudioCode", "Emacs", "NotepadPP", "SublimeText", "Eclipse"]

const language = ["Actionscript", "Android", "Go", "Swift", "Jekyll", "Ruby", "Unity", "Kotlin", "Java", "Node", "Python", "C", "C++"]

async function collect() {
    const tempDir = path.join(__dirname, `./temp/`)
    const docsDir = path.join(__dirname, `../docs/.vuepress/public/data.json`)
    const docsMdDir = path.join(__dirname, `../docs/gitignore.md`)
    const gitignoreUrl = `https://github.com/github/gitignore/archive/master.zip`
    let data = {
        platform: [],
        editor: [],
        language: []
    }
    await download(gitignoreUrl, tempDir, {
        extract: true
    })
    walk(tempDir, {
            directories: false
        })
        .filter(file => path.extname(file.relativePath.toLowerCase()) == '.gitignore')
        .forEach(file => {
            let name = path.basename(file.relativePath, '.gitignore')
            let content = fs.readFileSync(file.fullPath, "utf-8")
            content = "##  " + name + "\n" + "```" + "\n\n" + content + "\n\n" + "```" + "\n\n"
            fs.appendFile(docsMdDir, content, function (err) {
                if (err) {
                    console.log(err)
                }
            });
            if (platform.includes(name)) {
                data.platform.push({
                    name: name,
                    path: file.relativePath,
                    content: content
                })
            }
            if (editor.includes(name)) {
                data.editor.push({
                    name: name,
                    path: file.relativePath,
                    content: content
                })
            }
            if (language.includes(name)) {
                data.language.push({
                    name: name,
                    path: file.relativePath,
                    content: content
                })
            }
        })
    fs.writeFileSync(
        docsDir,
        JSON.stringify(data, null, 2)
    )
    fs.remove(tempDir)
}

collect()