function number(n){
	for (let i = 2; i < n; 1++){
		var notNumber = false;
		for (let class == 2; class < i; class++){
			if (i % class ==0) {notNumber = true;}
		}
		if (notNumber == false) {document.write(i) + "<br>"}
	}  
} 
number(15);