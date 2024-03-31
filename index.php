<?php

$themes = array_map('basename', glob(__DIR__ . '/themes/prism-*.css'));
$default = $themes[0];
$selected = $_GET['theme'] ?? $default;

$code = <<< JS
/**
 * Register a keycombo.
 *
 * @param key
 * @param callback
 * @return the listener
 */
export const keyCombo = (key: string, callback: Function): Listener => {
	return listen(window, 'keydown', (event: KeyboardEvent) => {
		if (event.ctrlKey || event.metaKey) {
			const _key: string = String.fromCharCode(event.which).toLowerCase();

			if (key == _key) {
				event.preventDefault();
				callback.apply(event.target, [event]);
				return;
			}
		}
	});
};

/**
 * Debounce a function.
 *
 * @param callback
 * @param [timeout]
 * @returns the debounced function
 */
export const debounce = (
	callback: (...args: any[]) => void,
	timeout: number = 50
): ((...args: any[]) => void) => {
	let timer: NodeJS.Timer;

	return (...args: any[]) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback.apply(this, args);
		}, timeout);
	};
};
JS;

?><!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Automad Prism Themes Tester</title>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"
		/>
		<link 
			rel="stylesheet" 
			href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css" 
		/>
		<link
			rel="stylesheet"
			href="themes/base.css"
		/>
		<link
			id="link"
			rel="stylesheet"
			href="themes/<?php echo $selected; ?>"
		/>
		<style>
			@media (prefers-color-scheme: dark) {
				:root {
					color-scheme: dark;
				}
			}
		</style>
	</head>
	<body>
		<nav class="navbar container is-fluid py-2">
			<div class="navbar-brand">
				<div
					class="navbar-item has-text-primary-100 is-size-5 has-text-weight-medium px-0"
				>
					Automad Prism Themes Tester
				</div>
			</div>
			<div class="navbar-end">
				<div class="navbar-item px-0">
					<div class="buttons">
						<div class="dropdown is-hoverable is-right">
							<div class="dropdown-trigger">
								<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
									<span id="label"><?php echo $selected; ?></span>
								</button>
							</div>
							<div class="dropdown-menu" id="dropdown-menu" role="menu">
								<div class="dropdown-content">
									<?php foreach ($themes as $theme) {
									    echo '<a href="?theme=' . $theme . '" class="dropdown-item">' . $theme . '</a>';
									} ?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="container mt-6 line-numbers">
			<pre><code class="language-javascript"><?php echo $code; ?></code></pre>
		</div>
	</body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
</html>
