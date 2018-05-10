function isStartSub(part, s) {
	var condi = s.startsWith(part);
	return condi;
}


var part = "like";
var s = "ilikealibaba";
var out = isStartSub(part, s);
console.log(out);
