const fsAsync = require('fs').promises;
const { src, dest, parallel } = require('gulp');
const foreach = require('gulp-foreach');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const path = require('path');
const header = require('gulp-header');
const footer = require('gulp-footer');
const fs = require('fs');
const distDir = path.join(__dirname, 'dist');
const screenshotDir = path.join(__dirname, 'screenshots');
const lightDark = require('./light-dark.json');

/**
 * Returns the names of all themes. This includes the `prism-` prefix.
 */
async function getThemes() {
	return (await fsAsync.readdir(distDir))
		.map((f) => (/^.+(?=\.css$)/.exec(f) || [''])[0])
		.filter((f) => f);
}

/**
 * Checks that all themes have a screenshot.
 */
async function checkScreenshots() {
	for (const theme of await getThemes()) {
		const file = `${screenshotDir}/${theme}.png`;
		if (
			!(await fsAsync
				.stat(file)
				.then((s) => s.isFile())
				.catch(() => false))
		) {
			throw new Error(`The theme "${theme}" doesn't have a screenshot.`);
		}
	}
}

/**
 * Checks that all themes are in the list of available themes.
 */
async function checkAvailableThemes() {
	const readme = await fsAsync.readFile(
		path.join(__dirname, 'README.md'),
		'utf-8',
	);

	for (const theme of await getThemes()) {
		if (!readme.includes(theme + '.css')) {
			throw new Error(
				`The theme "${theme}" is not included in the list of available themes.`,
			);
		}
		if (!readme.includes(theme + '.png')) {
			throw new Error(
				`The screenshot of "${theme}" is not included in the list of available themes.`,
			);
		}
	}
}

function minify() {
	return src(['themes/*.css', '!themes/base.css'])
		.pipe(header(fs.readFileSync('./themes/base.css', 'utf8')))
		.pipe(cleanCSS())
		.pipe(dest('dist/'));
}

function mergeLightDark() {
	const base = fs.readFileSync('./themes/base.css', 'utf8');
	const items = lightDark;

	const partials = [];

	items.forEach((data) => {
		partials.push(`
			<div>
				<div class="stack">
					<img src="${data.light.replace('.css', '.png')}">	
					<img src="${data.dark.replace('.css', '.png')}">	
				</div>
				<span>${data.name} Combo</span>
			</div>
		`);
	});

	const html = partials.join('');

	fs.writeFileSync('light-dark-gallery.html', html);

	const lightThemes = items.map((item) => `themes/${item.light}`);

	return src(lightThemes).pipe(
		foreach((stream, file) => {
			const filename = path.basename(file.path);

			const data = items.find((item) => item.light == filename);
			const darkFile = `themes/${data.dark}`;
			const darkTheme = fs.readFileSync(darkFile, 'utf8');
			const name = data.name.toLowerCase().replace(/\s/g, '-');

			const prefixed = darkTheme
				.replace(/(\n)([^\s\}@\/])/g, '$1[class*="dark"] $2')
				.replace(/\:root/g, '');

			return stream
				.pipe(header(base))
				.pipe(footer(prefixed))
				.pipe(cleanCSS())
				.pipe(rename(`prism-${name}.light-dark.css`))
				.pipe(dest('dist'));
		}),
	);
}

exports.check = parallel(checkScreenshots, checkAvailableThemes);
exports.build = parallel(minify, mergeLightDark);
