

function isStartSub(part, s) {
  var condi = s.startsWith(part);
  return condi;
}

function getRestStr(part, s) {
  var len = part.length;
  var len1 = s.length;
  var out = s.substring(len, len1);
  return out;
}

function recPrint(arr) {
	if(arr.length == 0) {
		return '';
	} else {
		var str = arr.pop();
		return str + recPrint(arr);
	}

}

function myPrint(arr) {
	return recPrint(arr);
}

function getMinArr(arr) {
	var min = Number.MAX_SAFE_INTEGER;
	var index = 0;
	for(var i=0; i<arr.length; i++) {
		var sub = arr[i];
		if(sub.length < min) {
			min = sub.length;
			index = i;
		} else {

		}	
	}

	return arr[index];	
}

function rec(s, d, buf) {
	// Base
	if(s.length == 0) {
		return;
	} else {
	
	} 

	for(var i=0; i<d.length; i++) {
		var subBuf = [];

		// baba
		var part = d[i];
		var condi = isStartSub(part, s);

		if(condi) {
			// rest string	
      var restStr = getRestStr(part, s);
      rec(restStr, d, subBuf);
			subBuf.unshift(part);
			buf.unshift(subBuf);
		} else {

		}		
	} // end loop

}

function myfunc(s, d) {
	var buf = [];
	rec(s, d, buf);

	console.log('-- test --');
	console.dir(buf, {depth:null});

	return myPrint(buf);	
}

var s = "ilikealibaba";
var d = ["i", "like", "ali", "liba", "baba", "alibaba"];
var out = myfunc(s, d);
console.log(out);
