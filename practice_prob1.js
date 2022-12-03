console.log("Hello World!");
function highestBillsUnder30(arrayOfPeople) {

    let highestBill = 0;
    let highestBillName = "";

    for (let i = 0; i < arrayOfPeople.length; i++) {
        let currentPersonObj = arrayOfPeople[i];
        let sumOfBills = 0;
        let currentBillsArr = currentPersonObj.bills;
        if (currentPersonObj.age > 30) {
            continue;
        }
        for (let j = 0; j < currentBillsArr.length; j++) {
            let currentBillValue = currentBillsArr[j];
            sumOfBills += currentBillValue;
        }
        if (sumOfBills > highestBill) {
            highestBill = sumOfBills;
            highestBillName = currentPersonObj.name;
        }
    }
    return highestBillName;
}

let person = [
	{
		name: "Vini",
		age: 25,
		bills: [
			300,
			200,
			100
		]
	}, 
	{
		name: "Bailey",
		age: 26,
		bills: [
			100,
			50,
			30
		]
	},
	{
		name: "Papi",
		age: 29,
		bills: [
			700,
			1000,
			50
		]
	}, 
	{
		name: "Gavin",
		age: 32,
		bills: [
			800,
			700,
			1100
		]
	}, 
]

console.log(highestBillsUnder30(person));