#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const download = require('download')
const walk = require('walk-sync').entries

const filter = {
	platform: ["macOS", "Windows", "Linux"],
	editor: ["Xcode", "Vim", "VisualStudioCode", "Emacs", "NotepadPP", "SublimeText", "Eclipse", "JetBrains"],
	language: ["Actionscript", "Android", "Go", "Swift", "Jekyll", "Ruby", "Unity", "Kotlin", "Java", "Node", "Python", "C", "C++"]
}

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
			let file_content = "##  " + name + "\n" + "```" + "\n\n" + content + "\n\n" + "```" + "\n\n"
			fs.appendFile(docsMdDir, file_content, function(err) {
				if (err) {
					console.log(err)
				}
			})
			for (type in filter) {
				if (filter[type].includes(name)) {
					data[type].push({
						name: name,
						path: file.relativePath,
						content: content
					})
				}
			}
		})

		let allList = ['platform', 'editor']
		allList.forEach(type => {
			data[type].push({
				name: 'All',
				path: false,
				content: data[type].reduce((_, next) => _.content ? _.content + next.content : _ + next.content)
			})
		})
	fs.writeFileSync(
		docsDir,
		JSON.stringify(data, null, 2)
	)
	fs.remove(tempDir)
}

collect()
