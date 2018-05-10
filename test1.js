function getRestStr(part, s) {
	var len = part.length;
	var len1 = s.length;
	var out = s.substring(len, len1);
	return out;
}


var part = "like";
var s = "likealibaba";
var out = getRestStr(part, s);
console.log(out);
