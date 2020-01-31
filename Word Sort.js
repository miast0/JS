qvar fs = require("fs");
var words = fs.readFileSync("Dictionary.txt").toString();
words = words.split("\n")

var badLetters = /[gkmqvwxz]/;
var longest = "";

for (var temp of words) {
	if (temp.length < longest.length){
		continue;
	}
	if (temp.match(badLetters)) {
		continue;
	}
	longest = temp;
}
console.log(longest)
