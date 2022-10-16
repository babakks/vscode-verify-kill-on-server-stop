const { exit } = require("process");
console.log('client started');
setTimeout(() => {
	console.log('client terminated');
	exit();
}, 999 * 1000);
