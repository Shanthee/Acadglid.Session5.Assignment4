// declaration of object
function Employee(name,age,salary,city,state,pincode) {
	this.name = name;
	this.age = age;
	this.salary = salary;
	this.address = {
		"city" : city,
	    "state" : state,
		"pincode" : pincode
	};
}
// constructing objects
var emp1 = new Employee("shanthee",29,50000,"bangalore","karnataka",560103);
var emp2 = new Employee("pravin",29,50000,"hosur","tamilnadu",635126);
var emp3 = new Employee("anand",33,100000,"chennai","tamilnadu",600028);
var emp4 = new Employee("swathy",29,50000,"chennai","tamilnadu",600027);
var emp5 = new Employee("manda",35,75000,"bangalore","karnataka",560102);


//printing on console
console.log("Name: " + emp3.name);
console.log("Age: " + emp3.age);
console.log("Salary: " + emp3.salary);
console.log("City: " + emp3.address.city);
console.log("State: " + emp3.address.state);
console.log("Pincode: " + emp3.address.pincode);
