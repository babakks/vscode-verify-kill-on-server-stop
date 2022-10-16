const { exit } = require("process");
console.log('server started');
setTimeout(() => {
	console.log('server terminated');
	exit();
}, 10 * 1000);
