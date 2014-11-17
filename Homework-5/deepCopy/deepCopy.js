function deepCopy(obj) {
	var temp;

	if (("object" !== typeof obj)||(obj===null) ) {
		return obj
	}

	if (obj instanceof Date) {
		temp = new Date();
		temp.setTime(obj.getTime());
		return temp;
	}

	if (obj instanceof Array) {
		temp = [];
		var length = obj.length,
			i;
		for (i=0; i<length; i++) {
			temp[i]=deepCopy(obj[i]);
		}
		return temp;
	}

	if (obj instanceof Object) {
		var attr;
		temp = {};
		for (attr in obj){
			if (obj.hasOwnProperty(attr)){
				temp[attr] = deepCopy(obj[attr]);
			}
		}
		return temp;
	}
}