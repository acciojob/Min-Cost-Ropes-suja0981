function mincost(arr)
{ 
//write your code here
	 let cost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        arr.push(sum);
	}
	return cost;
// return the min cost
  
}

module.exports=mincost;
