
var s = "ilikealibaba";
var arr = ["i", "like", "ali", "liba", "baba", "alibaba"];

// it is cache or some prev stat 
var dp = []; // dp[i] is the optimal solution for s.substring(0, i)
dp.push("");

for (var i = 1; i <= s.length; i++) {
	// We rest best, after done parts
	var best = null; // the best way so far for s.substring(0, i)

	// test
  console.log("------------ new part loop -----------");

  for (var j = 0; j < arr.length; j++) {

  	var word = arr[j];
    // consider all words that appear at the end of the prefix
    if (!s.substring(0, i).endsWith(word)) {
			// test
			console.log('---- not ends with');    
			console.log("sub: " + s.substring(0, i));
			console.log("word: " + word);

			continue;
		}

    if (word.length == i) {
			
			// test
			console.log('* single word');
			console.log(word);

    	best = word; // using single word is optimal
      break;
    }

		// prev is the one just before word
		// e.g. ["", "i", null, null]
    var prev = dp[i - word.length];

		//test
		console.log('@@@ prev @@@');
		console.log(prev);
		console.log("prev index: " + (i - word.length));
		console.log("!!! dp");
		console.log(dp);
		console.log("word: " + word);
		console.log("i: " + i);
		console.log("j: " + j);
		console.log("s.sub: " + s.substring(0, i));
		// best always reset, new found or shorter
		console.log("best: " + best);

    if (prev === null)
    	continue; // s.substring(i - word.length) can't be made at all

		// We want to have less word, so word len..., because space make it longer....
    if (best === null || prev.length + word.length + 1 < best.length) {
    	best = prev + " " + word;

			console.log('^^ opt best ^^^^^^');
			console.log(best);
		}

		// test
		console.log('-- best --');
		console.log(best);
	}

	// loop done, push, no best, push null
  dp.push(best);
	
	// test
	console.log('-- after dp push --');
	console.log(dp);
	
}

console.log(dp[s.length]);
