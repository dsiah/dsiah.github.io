var ptab = {
	'000': 0, '101': 0, '111': 0, '110': 0,
	'100': 1, '011': 1, '010': 1, '001': 1
};

function generate(prow, index, ptab) {
	var serial = [ prow[index - 1], prow[index], prow[index + 1] ].join('');
	return ptab[serial];
}

function make(row) {
	var new_row = new Array(row.length);
	new_row[0]  = 0;
	
	for (var j = 1; j < row.length - 1; j++) {
		new_row[i] = generate(row, j, ptab);
	}

	new_row[row.length] = 0;
	return new_row;
}

// var row = [0,0,0,0,0,1,0,0,0,0];
// console.log(row);
// for (var i = 0; i < 10; i++) {
// 	var n_row = make(row);
// 	row = n_row;
// 	console.log(row);
// }
