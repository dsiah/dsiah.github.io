var tableau = {
	'am-hop': 'am-block',
	'r-hop': 'r-block',
	'c-hop': 'c-block',
	't-hop': 't-block',
};

function scrollById() {
	var dest = tableau[this.id];
	document.getElementById(dest).scrollIntoView({
		block: "start", behavior: "smooth"
	});
}

var hoplinks = document.getElementsByClassName('toc-item');

for (var ind = 0; ind < hoplinks.length; ind++) {
	hoplinks[ind].onclick = scrollById;
}