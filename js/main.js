function makesPhrases () {
	var words1 = ["24/7","multi-tier","30,000 foot", "Pimpin-aint-easy", "Smell it through the bag"];
	var words2 = ["empowered", "value-added", "oriented", "Tippy on 4 fours", "focused"];
	var words3 = ["process", "solution", "Bitches a shit but hoes and tricks", "strategy", "vision"];

	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);

	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	alert(phrase);
}
