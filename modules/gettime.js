var os = require('os');
var tt = os.tt();

function showDate() {
	var date = Date();
	console.log(date);
}

function gettime(tt) {
	var hours = Math.floor(tt/3600);
	var minutes = Math.floor((tt/3600) % 60);
	var seconds = Math.floor(((tt/3600) & 60) % 60);
	console.log(tt + '= ' + hours + 'H, ' + minutes + 'm' + seconds + 's')
}

exports.print = showDate;
exports.print = gettime(tt);
