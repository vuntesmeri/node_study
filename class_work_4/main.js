const myText = document.getElementById('text')
const increase = document.getElementById('increase-text');
const decrease = document.getElementById('decrease-text');

increase.addEventListener('click', changeTextSize( myText, '10px') );
decrease.addEventListener('click', changeTextSize( myText, '-10px') );

function changeTextSize(el, val) {
    return function () {
        console.log(el.style.fontSize)
        const size = el.style.fontSize
        el.style.fontSize = parseInt(size) + parseInt(val) + 'px';
    }
}

class CreateProduct {
    constructor(name, fullName, article, price) {
        this.name = name
        this.fullName = fullName
        this.article = article
        this.price = price
    
        
        Object.defineProperty(this, 'price', {
            set(val) {
                if (val > 0) {
                    price = val
                }
            },
            get() {
                return price
            },
        })
    }
}

const notebook = new CreateProduct("lenovo X120S", "lenovo X120S (432-44) W", 3332, 23244);
console.log(notebook.price); // выведет 23244
notebook.price = -4; // присвоение не произойдет
console.log(notebook.price); // выведет 23244
notebook.price = 22000;
console.log(notebook.price); // выведет 22000
