function palindrome(str) {
	//create an array of all characters in lower case
	let palArrOrig = str.toLowerCase().split("");
	//iterate the array and push all letters and numbers to a new array
	let palArrNew = [];
	for (let i = 0; i < palArrOrig.length; i++) {
		 if (/[^\W_]/.test(palArrOrig[i])) {
		 	palArrNew.push(palArrOrig[i])
		 }
	}
	//check if there's an even or an uneven number of characters
	if (palArrNew.length % 2 === 0) {
		//if there's an even number of characters, compare the first half to the reversed second half 
		//joined together as strings. If equal, return true, otherwise, return false.
		let firstHalf = palArrNew.slice(0, palArrNew.length / 2).join("");
		let secondHalf = palArrNew.slice(palArrNew.length / 2).reverse().join("");
		return firstHalf == secondHalf ? true : false;
	} else {
		//same as above, only ignore the middle letter
		let firstHalf = palArrNew.slice(0, (palArrNew.length - 1)/ 2).join("");
		let secondHalf = palArrNew.slice((palArrNew.length + 1) / 2).reverse().join("");
		return firstHalf == secondHalf ? true : false;
	}
	return palArrNew;
	//split in half, if even check if first half == second half, if uneven check the same, both including middle letter.
  // Good luck!
  return true;
}



console.log(palindrome("brarb"));