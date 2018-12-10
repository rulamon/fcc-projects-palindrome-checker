function palindrome(str) {
	let front = 0;
	let back = str.length - 1
	let regex = /[\W_]/
	while (back > front) {
		if (regex.test(str[front])) {
			front ++; 
			continue;
		};
		if (regex.test(str[back])) {
			back --;
			continue;
		}
		if (str[front].toLowerCase() !== str[back].toLowerCase()) {
			return false
		}
		front ++
		back --
	}
	return true
}



console.log(palindrome("bra./Rb"));