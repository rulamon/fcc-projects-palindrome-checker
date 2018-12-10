function palindrome(str) {
	return str.toLowerCase().replace(/[\W_]/g, "") === 
		str.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("")
}



console.log(palindrome("bra.r.b"));