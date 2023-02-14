
class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }
    set name(value){
        return this._name = value.toUpperCase();
    }
    get name() {
        return this._name;
    }
    set age(value) {
        const date = new Date()
        return this._age = date.getFullYear()-value;
    }
    get age() {
        return this._age + ' YEAR';
    }

    set salary(value) {
        this._salary = Math.floor(value/36.6);
        return this._salary
    }

    get salary() {
        return this._salary
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    set salary(val) {
        this._salary = Math.floor(val/36.6)*3;
        return this._salary 
    }
    get salary() {
        return this._salary + ' USD'
    }
}

const prog_1 = new Programmer("Pavel", "16", 15000, "JS");
console.log('Programmer_1 - ',prog_1.salary)
const prog_2 = new Programmer("Gregory", "23", 120000, "Java");
console.log('Programmer_1 - ',prog_2)
const prog_3 = new Programmer("Olga", "13", 5000, "HTML");
console.log('Programmer_1 - ', prog_3)