let array = [2, 4, 7, 5, 4, 3, 8];

let result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);





const isLeapYear = year => {
	 if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	 }else{
		return false;
	 }
}
console.log(isLeapYear(2020));// うるう年
console.log(isLeapYear(2021));