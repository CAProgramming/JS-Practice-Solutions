var arr1 = [12,42,2,1,2];
function pairwise_addition(array1,array2,shorten) {
	var arrayAdded = []
  
  for (var x = 0; x < Math.max(array1.length,array2.length); x ++) {
    if (x < Math.min(array1.length,array2.length)) {
      arrayAdded.push(array1[x] + array2[x]);
    } else if (!shorten) {
    	if (array1.length > array2.length) {
    		arrayAdded.push(array1[x]);
      } else {
    		arrayAdded.push(array2[x]);
      }
    }
    
    }
    return arrayAdded;
  
}

var arr3 = pairwise_addition(arr1,arr1)
console.log(arr3)
