function currentPosition(FEN_string) {
	var frows = FEN_string.split('/');
	var target, col, row;

	for (var i = 0; i < frows.length; i++) {
		if (frows[i].length > 1) {
			target = frows[i].split('');
			row = i;
			break;
		}
	}

	if (target.length > 2) 
		return [row, Number(target[0])];
	else if (target[0] == 'n') 
		return [row, 0];
	else 
		return [row, 7];
}

function makeFEN(row, col) {
	var rows  = ['8', '8', '8', '8', '8', '8', '8', '8'];
	var left  = col > 0 ? String(col) : '' ;
	var right = col < 7 ? String(7 - col) : '';
	rows[row] = left + 'n' + right;
	return rows.join('/');
}

function validKnightMoves(row, col, poss) {
	// Is there a better way?
	if (row + 1 < poss.length && col + 2 < poss[0].length)
		console.log(poss[row + 1][col + 2], row+1, col+2);

	if (row - 1 > -1 && col + 2 < poss[0].length)
		console.log(poss[row - 1][col + 2], row-1, col+2);
	
	if (row + 1 < poss.length && col - 2 > -1)
		console.log(poss[row + 1][col - 2], row+1, col-2);
	
	if (row - 1 > -1 && col - 2 > -1)
		console.log(poss[row - 1][col - 2], row-1, col-2);
	
	if (row + 2 < poss.length && col + 1 < poss[0].length)
		console.log(poss[row + 2][col + 1], row+2, col+1);
	
	if (row - 2 > -1 && col + 1 < poss[0].length)
		console.log(poss[row - 2][col + 1], row-2, col+1);
	
	if (row + 2 < poss.length && col - 1 > -1)
		console.log(poss[row + 2][col - 1], row+2, col-1);
	
	if (row - 2 > -1 && col - 1 > -1)
		console.log(poss[row - 2][col - 1], row-2, col-1);
}

function updatePossibilitiesOnMove(row, col, poss) {
	// Is there a better way?
	if (row + 1 < poss.length && col + 2 < poss[0].length && poss[row + 1][col + 2] > 0)
		poss[row + 1][col + 2] -= 1;

	if (row - 1 > -1 && col + 2 < poss[0].length && poss[row - 1][col + 2] > 0)
		poss[row - 1][col + 2] -= 1;
	
	if (row + 1 < poss.length && col - 2 > -1 && poss[row + 1][col - 2] > 0)
		poss[row + 1][col - 2] -= 1;
	
	if (row - 1 > -1 && col - 2 > -1 && poss[row - 1][col - 2] > 0)
		poss[row - 1][col - 2] -= 1;
	
	if (row + 2 < poss.length && col + 1 < poss[0].length && poss[row + 2][col + 1] > 0)
		poss[row + 2][col + 1] -= 1;
	
	if (row - 2 > -1 && col + 1 < poss[0].length && poss[row - 2][col + 1] > 0)
		poss[row - 2][col + 1] -= 1;
	
	if (row + 2 < poss.length && col - 1 > -1 && poss[row + 2][col - 1] > 0)
		poss[row + 2][col - 1] -= 1;
	
	if (row - 2 > -1 && col - 1 > -1 && poss[row - 2][col - 1] > 0)
		poss[row - 2][col - 1] -= 1;

	poss[row][col] = 0;
}

function nextMove(row, col, poss) {
	var min = [null, null];
	var sml = 1000;
	if (row + 1 < poss.length && col + 2 < poss[0].length && poss[row + 1][col + 2] > 0)
		if (poss[row + 1][col + 2] < sml) { 
			sml = poss[row + 1][col + 2];  
			min = [row + 1, col + 2];
		}

	if (row - 1 > -1 && col + 2 < poss[0].length && poss[row - 1][col + 2] > 0)
		if (poss[row - 1][col + 2] < sml) { 
			sml = poss[row - 1][col + 2];  
			min = [row - 1, col + 2];
		}
	
	if (row + 1 < poss.length && col - 2 > -1 && poss[row + 1][col - 2] > 0)
		if (poss[row + 1][col - 2] < sml) { 
			sml = poss[row + 1][col - 2];  
			min = [row + 1, col - 2];
		}
	
	if (row - 1 > -1 && col - 2 > -1 && poss[row - 1][col - 2] > 0)
		if (poss[row - 1][col - 2] < sml) { 
			sml = poss[row - 1][col - 2];  
			min = [row - 1, col - 2];
		}
	
	if (row + 2 < poss.length && col + 1 < poss[0].length && poss[row + 2][col + 1] > 0)
		if (poss[row + 2][col + 1] < sml) { 
			sml = poss[row + 2][col + 1];  
			min = [row + 2, col + 1];
		}
	
	if (row - 2 > -1 && col + 1 < poss[0].length && poss[row - 2][col + 1] > 0)
		if (poss[row - 2][col + 1] < sml) { 
			sml = poss[row - 2][col + 1];  
			min = [row - 2, col + 1];
		}
	
	if (row + 2 < poss.length && col - 1 > -1 && poss[row + 2][col - 1] > 0)
		if (poss[row + 2][col - 1] < sml) { 
			sml = poss[row + 2][col - 1];  
			min = [row + 2, col - 1];
		}
	
	if (row - 2 > -1 && col - 1 > -1 && poss[row - 2][col - 1] > 0)
		if (poss[row - 2][col - 1] < sml) { 
			sml = poss[row - 2][col - 1];  
			min = [row - 2, col - 1];
		}

	return min;
}

var cfg = {
	draggable: true,
	showNotation: false,
	dropOffBoard: 'trash',
	position: '1n6/8/8/8/8/8/8/8',
};

var board = ChessBoard('board', cfg),
		possible = [
	[2,3,4,4,4,4,3,2],
	[3,4,6,6,6,6,4,3],
	[4,6,8,8,8,8,6,4],
	[4,6,8,8,8,8,6,4],
	[4,6,8,8,8,8,6,4],
	[4,6,8,8,8,8,6,4],
	[3,4,6,6,6,6,4,3],
	[2,3,4,4,4,4,3,2]
];

var moves = 1;
var arr = currentPosition(cfg.position);

var frame = setInterval(function() {
	if (Object.keys(board.position()).length > 0) {
		var m = document.querySelector('[data-square=' + Object.keys(board.position()) + ']');
		m.className += ' passed';
	}
	updatePossibilitiesOnMove(arr[0], arr[1], possible);
	arr = nextMove(arr[0], arr[1], possible);
	board.position(makeFEN(arr[0], arr[1]), true);
	console.log(++moves);
	if (moves > 63) {
		window.clearInterval(frame);
		debugger;
	} 
}, 250);