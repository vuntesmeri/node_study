class Modal {
    constructor(id, classes) {
        this.id = id;
        this.classes = classes;
    }
    render(form) {
        const modal = document.createElement("div");
        modal.id = this.id;
        modal.className = this.classes;

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;";

        close.addEventListener("click", () => {
            this.closeModal();
        });

        modal.append(modalContent);
        modalContent.append(close, form)

        // modalContent.append(close);
        // modalContent.insertAdjacentHTML("beforeend", form);

        this.modal = modal;

        return modal;
    }

    openModal() {
        this.modal.classList.add("active");
    }

    closeModal() {
        this.modal.classList.remove("active");
    }

}

class Inpute extends Modal {
    constructor(type, name, require, id, classes, placeholder, value, errorText, formId) {
        super(id, classes)
        this.type = type
        this.name = name
        this.require = require
        this.placeholder = placeholder
        this.value=value
        this.errorText = errorText
        this.formId = formId
    }
    render1() {
        const form = document.createElement("form");
        form.id = this.formId;
        
        const x = document.createElement("input")
            x.type = this.type
            x.name = this.name
            x.placeholder = this.placeholder
            x.value = this.value
            x.required = this.require
   
        form.appendChild(x)
        return form;
        // }
        // catch (e) {
        //     console.log(e)
        // } finally {
        //     console.log("hhhh")
        // }
    }
    handleBlur() {
        pass
    }
}

class Registration extends Modal {
    constructor(id, classes, formId) {
        super(id, classes);
        this.formId = formId;
    }
    createRegister() {
        const form = document.createElement("form");
        form.id = this.formId;
        
        const inputLogin = document.createElement("input");
        inputLogin.type = "text";
        inputLogin.name = "login";
        inputLogin.placeholder = "Ваш логин";
        inputLogin.required = true;
        const inputEmail = document.createElement("input");
        inputEmail.type = "email";
        inputEmail.name = "email";
        inputEmail.placeholder = "Ваш email";
        inputLogin.required = true;
        const inputPassword = document.createElement("input")
        inputPassword.type = "password"
        inputPassword.name = "password"
        inputPassword.placeholder = "Ваш пароль"
        inputPassword.required = true;
        const inputPasswordRepeat = document.createElement("input")
        inputPasswordRepeat.type = "password"
        inputPasswordRepeat.name = "repeat-password"
        inputPasswordRepeat.placeholder = "Повторите пароль"
        inputPasswordRepeat.required = true;
        const inputSubmit = document.createElement("input")
        inputSubmit.type = "submit"
        inputSubmit.value = "Вход"

        // form.append(inputLogin, inputEmail, inputePassword);
        form.appendChild(inputLogin)
        form.appendChild(inputEmail)
        form.appendChild(inputPassword)
        form.appendChild(inputPasswordRepeat)
        form.appendChild(inputSubmit)
        return form;
    }
}

class Authorisation extends Modal {
    constructor(id, classes, loginId) {
    super(id, classes);
    this.loginId = loginId;
    }

    createAuthorisation() {
        const form = document.createElement("form");
        form.id = this.loginId;
        
        const inputLogin = document.createElement("input");
        inputLogin.type = "text";
        inputLogin.name = "login";
        inputLogin.placeholder = "Ваш логин или email";
        inputLogin.required = true;

        const inputPassword = document.createElement("input")
        inputPassword.type = "password"
        inputPassword.name = "password"
        inputPassword.placeholder = "Ваш пароль"
        inputPassword.required = true;

        const inputSubmit = document.createElement("input")
        inputSubmit.type = "submit"
        inputSubmit.value = "Вход"
        
        // form.append(inputLogin, inputEmail, inputePassword);
        form.appendChild(inputLogin)
        form.appendChild(inputPassword)
        form.appendChild(inputSubmit)
        return form;
    }
}

const root = document.getElementById("root");

// const modal1 = new Registration("modal1", "modal modal-green", "register-form");
// const modal2 = new Authorisation("modal2", "modal modal-green", "login-form");
const modal3 = new Inpute('submit', '', false, "modal3", 'modal modal-green', '', 'Вход','Жопа',"login-form")

// type, name, require, id, classes, placeholder, errorText

// console.log(modal1.createRegister());
// console.log(modal2.createAuthorisation());
console.log(modal3.render());

// root.append(modal1.render(modal1.createRegister()));
// root.append(modal2.render(modal2.createAuthorisation()));
root.append(modal3.render(modal3.render1()));

// const myBtn = document.getElementById("myBtn");
// myBtn.addEventListener("click", modal1.openModal.bind(modal1));

const myBtn1 = document.getElementById("myBtn1");
myBtn1.addEventListener("click", modal3.openModal.bind(modal3));

const p = "{a: 3}"
function parseJSON(param) {
     return   JSON.parse(p);
}

const res = parseJSON(p);
console.log(res)