class Modal {
    constructor(root) {
        this.root =  root
    }
    createModal() {
        const body = document.createElement('div')
        const form = document.createElement('form')
        body.className = 'body'
        const doctorList = document.createElement('select')
        doctorList.className = 'select'
        const labelDoctor = document.createElement('option')
        labelDoctor.textContent = 'Choose Doctor'
        labelDoctor.disabled = true
        labelDoctor.selected = 'selected'
        labelDoctor.hidden = 'hidden'
        const doctorCardiolog = document.createElement('option');
        doctorCardiolog.textContent = 'Кардіолог';
        const doctorStomatolog = document.createElement('option');
        doctorStomatolog.textContent = 'Стоматолог';
        const doctorTerapevt = document.createElement('option');
        doctorTerapevt.textContent = 'Терапевт';
        doctorList.append(labelDoctor, doctorCardiolog, doctorStomatolog, doctorTerapevt);
        doctorList.addEventListener('change', (event) => {
            form.innerHTML = ''
            if (event.target.value == 'Кардіолог') {
                const cardy = new ModalFormInputCardiology(event.target.value)
                cardy.createInputFieldCardiolog(form)
            }
            else if(event.target.value == 'Стоматолог') {
                const cardy = new ModalFormInputStomatology(event.target.value)
                cardy.createInputFieldStomatolog(form) 
            }
            else if(event.target.value == 'Терапевт') {
                const cardy = new ModalFormInputTerapevt(event.target.value)
                cardy.createInputFieldTerapevt(form) 
            }
            form.className = 'form'
            
        })
        const buttonCreate = document.createElement('button')
        buttonCreate.className = 'create-button'
        buttonCreate.setAttribute('type', 'submit')
        buttonCreate.textContent = 'Створити'
        buttonCreate.addEventListener('click', (event) => {
            const elementS = form.elements
            if (!form.getAttribute('name')) {
            false
            }
            else if (Array.from(elementS).some(el => el.value.trim() == '')) {
                Array.from(elementS).forEach(el => (el.value.trim() == '') ?
                    el.classList.add('error') :
                    el.classList.remove('error'))
            } else {
                const jsonelements = Array.from(elementS).reduce((acc, el) =>
                    Object.assign(acc, { [el.name]: el.value })
                    , { doctor: `${form.getAttribute('name')}` })
                fetch("https://ajax.test-danit.com/api/v2/cards/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: 'vuntaj@gmail.com', password: 'group6' })
                })
                    .then(response => response.text())
                    .then(token =>
                        fetch("https://ajax.test-danit.com/api/v2/cards", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                            body: JSON.stringify(
                                jsonelements
                            )
                         
                        }).then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.log(error))
                )
                .then(body.remove())
                .catch(error => console.log(error))
            }
        })
        const buttonCansel = document.createElement('button')
        buttonCansel.className = 'cansel-button'
        buttonCansel.textContent = 'Закрити'
        buttonCansel.setAttribute('type', 'button');
        buttonCansel.addEventListener('click', () => {body.remove() })
        body.append(doctorList, form, buttonCansel, buttonCreate)
        this.root.append(body)
        return form
    }
}

class ModalFormInput{
    constructor() {
    }
    createInputField() {
        const labelPurpose = document.createElement('label')
        labelPurpose.className = 'label'
        labelPurpose.setAttribute('for', 'purpose')
        labelPurpose.textContent = 'мета візиту'

        const visitPurpose = document.createElement('input')
        visitPurpose.validity
        visitPurpose.required = true
        visitPurpose.className = 'field'
        visitPurpose.name = 'purpose'

        const labelDescription = document.createElement('label')
        labelDescription.className = 'label'
        labelDescription.textContent = 'короткий опис візиту'
        labelDescription.setAttribute('for', 'description')
        const visitDescription = document.createElement('textarea')
        visitDescription.className = 'textarea'
        visitDescription.name = 'description'

        const labelPersonality = document.createElement('label')
        labelPersonality.className = 'label'
        labelPersonality.textContent = 'ПІБ'
        labelPersonality.setAttribute('for', 'name')
        const visitPersonality = document.createElement('input')
        visitPersonality.className = 'field'
        visitPersonality.name = 'name'

        const labelUrgency = document.createElement('label')
        labelUrgency.className = 'label'
        labelUrgency.textContent = 'терміновість'
        labelUrgency.setAttribute('for', 'urgency')
        const visitUrgency = document.createElement('select')
        visitUrgency.className = 'field'
        visitUrgency.name = 'urgency'
        
        const urgencyOrdinary = document.createElement('option')
        urgencyOrdinary.textContent = 'звичайна'

        const urgencyPriority = document.createElement('option')
        urgencyPriority.textContent = 'пріоритетна'

        const urgencyUrgent = document.createElement('option')
        urgencyUrgent.textContent = 'невідкладна'

        visitUrgency.append(urgencyOrdinary, urgencyPriority, urgencyUrgent)

        return [labelPurpose,visitPurpose, labelDescription,visitDescription, labelPersonality, visitPersonality, labelUrgency, visitUrgency]
    }
}
class ModalFormInputCardiology extends ModalFormInput {
    constructor(doctor) {
        super()
        this.doctor = doctor
    }

    createInputFieldCardiolog(form) {
        const labelPressure = document.createElement('label')
        labelPressure.className = 'label'
        labelPressure.textContent = 'звичайний тиск (мм.рт.ст)'
        labelPressure.setAttribute('for', 'pressure')
        const normalPressure = document.createElement('input')
        
        normalPressure.className = 'field'
        normalPressure.name = 'pressure'
       
        const labelBodyIndex = document.createElement('label')
        labelBodyIndex.className = 'label'
        labelBodyIndex.textContent = `індекс маси тіла (кг/м2)`
        labelBodyIndex.setAttribute('for', 'bodyIndex')
        const massBodyIndex = document.createElement('input')
        massBodyIndex.className = 'field'
        massBodyIndex.setAttribute('type', 'number')
        massBodyIndex.name = 'bodyIndex'

        const labelCardioDiseas = document.createElement('label')
        labelCardioDiseas.className = 'label'
        labelCardioDiseas.textContent = 'перенесені захворювання серцево-судинної системи'
        labelCardioDiseas.setAttribute('for', 'cardioDiseas')
        const transferdCardioDiseas = document.createElement('input')
        transferdCardioDiseas.className = 'field'
        transferdCardioDiseas.name = 'cardioDiseas'

        const labelAge = document.createElement('label')
        labelAge.className = 'label'
        labelAge.textContent = 'вік'
        labelAge.setAttribute('for', 'age')
        const patientAge = document.createElement('input')
        patientAge.className = 'field'
        patientAge.setAttribute('type', 'number')
        patientAge.name = 'age'
        patientAge.min = 0
        
     
        form.prepend(...this.createInputField(), labelPressure, normalPressure, labelBodyIndex, massBodyIndex, labelCardioDiseas, transferdCardioDiseas, labelAge, patientAge)
        form.name = this.doctor
    }
}
class ModalFormInputStomatology extends ModalFormInput{
    constructor(doctor) {
        super()
        this.doctor = doctor
    }
    createInputFieldStomatolog(form) {
        const labelLastVisit = document.createElement('label')
        labelLastVisit.className = 'label'
        labelLastVisit.textContent = 'дата останнього відвідування'
        labelLastVisit.setAttribute('for', 'last_visit')
        const dateLastVisit = document.createElement('input')
        dateLastVisit.setAttribute('type', 'date')
        dateLastVisit.className = 'field'
        labelLastVisit.name = 'last_visit'

        form.name = this.doctor
        form.append(...this.createInputField(), labelLastVisit, dateLastVisit)
    }
}
class ModalFormInputTerapevt extends ModalFormInput{
    constructor(doctor) {
        super()
        this.doctor = doctor
    }
    createInputFieldTerapevt(form) {
        const labelAge = document.createElement('label')
        labelAge.className = 'label'
        labelAge.textContent = 'вік'
        labelAge.setAttribute('for', 'age')
        const patientAge = document.createElement('input')
        patientAge.setAttribute('type', 'number')
        patientAge.className = 'field'
        patientAge.name = 'age'

        form.name = this.doctor
        form.append(...this.createInputField(form), labelAge, patientAge)
    }
}
root = document.getElementById('main__buttons--visit')
const modalopen = new Modal(root)
modalopen.createModal()

