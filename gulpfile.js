const { src, dest, parallel } = require('gulp');
const foreach = require('gulp-foreach');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const path = require('path');
const header = require('gulp-header');
const footer = require('gulp-footer');
const fs = require('fs');
const lightDark = require('./light-dark.json');

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

exports.build = parallel(minify, mergeLightDark);
