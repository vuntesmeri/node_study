
class Patient {
    constructor(rost, ves) {
        this.rost = rost / 100
        this.ves = ves
        this.ojir = this.ves / (this.rost ** 2)
    }
    
    getPatientStatus() {
        let x = Math.round(this.ojir)
        switch (true) {
            case (x >= 10 && x <=15):
                return `анорексия`;
                break
            case (x >= 16 && x<=25):
                return `норма`
                break
            case (x >= 26 && x<=31):
                return `лишний вес`
                break
            case (x >= 31 && x<=36):
                return `I степень`
                break
            case (x >= 36 && x<=41):
                return 'II степень'
            case (x > 41):
                return `III степень`
                break
            default:
                return 'less'
                break

        }
    }
}
let patient = new Patient(164, 42);
console.log(patient.rost)
console.log(patient.ves)
console.log(patient.ojir)
console.log(patient.getPatientStatus())

class Warrior {
    constructor({ name, weapon, staus }) {
        this.name = name
        this.weapon = weapon
        this.staus = staus
    }
}
let warrior = new Warrior({ name: "Ivan", lastName: "Me", weapon: "gun", status: "True", vid: "Vid" })
console.log(warrior)

class VacancyHelper {
    constructor(resume, vacancy) {
        this.resume = resume
        this.vacancy = vacancy
    }
    getPersantage() {
        let { skills: resumeS } = this.resume
        let { skills: vacancyS } = this.vacancy
        
        const gotSkills = vacancyS.reduce((count, { name: vacancyN, experience } = vacancyS) => {
            let x = resumeS.filter(({ name: resumeN, practice }) => {
             return   resumeN == vacancyN && practice >= experience
            })
            return count + x.length
        }, 0)
        return Math.round(gotSkills*100/vacancyS.length)
    }
}
const resume = {
    name: "Илья",
    lastName: "Куликов",
    age: 29, city: "Киев",
    skills: [
        { name: "Vanilla JS", practice: 5 },
        { name: "ES6", practice: 3 },
        { name: "React + Redux", practice: 1 },
        { name: "HTML4", practice: 6 },
        { name: "CSS2", practice: 6 }
    ]
};
const vacancy = {
    company: "SoftServe",
    location: "Киев",
    skills: [
        {name: "Vanilla JS", experience: 3},
        { name: "ES6", experience: 2 },
        { name: "React + Redux", experience: 2 },
        { name: "HTML4", experience: 2 },
        { name: "CSS2", experience: 2 },
        { name: "HTML5", experience: 2 },
        { name: "CSS3", experience: 2 },
        { name: "AJAX", experience: 2 },
        { name: "Webpack", experience: 2 }
    ]
};
let helper = new VacancyHelper(resume, vacancy);
console.log(helper.getPersantage())
