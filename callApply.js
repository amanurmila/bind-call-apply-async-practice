const normalPerson = {
    firstName: "Muhammad",
    lastName: "Amanullah",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}



const heroPerson = {
    firstName: "Hero",
    lastName: "Alom",
    salary: 25000
}




const friendlyPerson = {
    firstName: "Hero",
    lastName: "Molom",
    salary: 30000
}

// Bind is here.....

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2500);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(14000);
// console.log(friendlyPerson.salary);





// Call is here.....

// normalPerson.chargeBill.call(heroPerson, 4000, 400, 40);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 2000, 1300, 20);
// console.log(friendlyPerson.salary);





// Apply is here.....

normalPerson.chargeBill.apply(heroPerson, [2000, 500, 50]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 56]);
console.log(heroPerson.salary);