/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // transactions = array of objects
  const ans=[]
  for(let transaction of transactions){
    let isPresent=false;
    //transaction = object
    for(let i=0;i<ans.length;i++){
      let currentObj=ans[i];
      for(let keys in currentObj){
        console.log(keys);
        if(transaction.category==currentObj.keys){
          isPresent=true;
          currentObj.totalSpent+=transaction.price;          
        }
      }
      // if(transaction.category in currentObj){
      //   isPresent=true;
      //   currentObj.totalSpent+=transaction.price;
      // }
    }
    // else{
      if(isPresent==false){
        let notRegisteredCategory=transaction.category;
        ans.push({category: notRegisteredCategory, totalSpent:transaction.price});
      }

    // }
  }
  return ans;
}

let transac=[{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},        {
  id: 2,
  timestamp: 16560768012000,
  price: 20,
  category: 'Food',
  itemName: 'Mutton',
}]

console.log(calculateTotalSpentByCategory(transac))

module.exports = calculateTotalSpentByCategory;
