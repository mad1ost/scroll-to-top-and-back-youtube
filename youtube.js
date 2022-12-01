'use strict';

document.addEventListener('mouseup', (event) => {
	if (event.target.nodeName !== 'A') return;

	const link = event.target;
	const url = document.location;

	if (link.protocol !== url.protocol ||
		link.host !== url.host ||
		link.pathname !== url.pathname) {
		return;
	}

	const linkParams = new URLSearchParams(link.search.substring(1));
	const urlParams = new URLSearchParams(url.search.substring(1));

	if (linkParams.has('v') &&
		linkParams.get('v') === urlParams.get('v') &&
		linkParams.has('t')) {
		browser.runtime.sendMessage(
			"{5c2dbcaa-cb52-4678-a361-14d7f7b569a6}",
			window.scrollY
		);
	}
});
