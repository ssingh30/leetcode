const shuffle=(s, indices)=>{
	let newString = "";
	for(let i=0; i<s.length; i++){
		let index = indices.indexOf(i);
		let char = s[index];
		newString += char;	
	}
	return newString;
}

