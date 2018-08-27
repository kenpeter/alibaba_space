var buf = [];

function pathRec(arr, prevMyReturn) {
	if(arr.length == 0) {
		prevMyReturn.push("");
		return;
	}

	var par = arr.shift();
	for(var i=0; i<arr.length; i++) {
		var left = arr[i];
		var myreturn = [];
		pathRec(left, myreturn);
		buf.push(part + " " + myreturn);
	}	
}


function printPath(arr) {

	pathRec(arr);
}


var myin = [ 'i', [ 'like', [ 'alibaba' ], [ 'ali', [ 'baba' ] ] ] ]; 
var out = printPath(myin); 


