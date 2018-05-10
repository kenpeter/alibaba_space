

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

function rec(s, d, buf) {
	// Base
	if(s.length === 0) {
		return;
	}

	var subBuf = [];
	for(var i=0; i<d.length; i++) {
		var part = d[i];
		var condi = isStartSub(part, s);

		if(condi) {
			subBuf.push(part);
      var restStr = getRestStr(part, s);
      rec(restStr, d, subBuf);
			buf.push(subBuf);
		} else {

		}		
	}

}

function myfunc(s, d) {
	var buf = [];	
	for(var i=0; i<d.length; i++) {
		var subBuf = [];
		var part = d[i];
    var condi = isStartSub(part, s);
		if(condi) {
			subBuf.push(part);
			var restStr = getRestStr(part, s);
			rec(restStr, d, buf);
			
			//
			buf.push(subBuf);	
    } else {

    }	
	}	

	console.log('-- test --');
	console.log(buf);
}

var s = "ilikealibaba";
var d = ["i", "like", "ali", "liba", "baba", "alibaba"];
var out = myfunc(s, d);
console.log(out);
