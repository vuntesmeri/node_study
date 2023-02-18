const elemWhereInput = document.getElementById("root");

// function booksList(books) {
//     const booksListCreator = books.reduce((count, {author, name, price } = books ) => {
        
//         try {
//             if (!author) {
//                 throw new Error(`No author data`);
//             }
//             if (!name) {
//                 throw new Error(`No name data`);
//             }
//             if (!price) {
//                 throw new Error(`No price data`);
//             }
//             const elemWhatInput = document.createElement("ul");
//             let authorProp = document.createElement('li')
//             authorProp.insertAdjacentText('beforeend', ` author: ${author} `);
//             let nameProp = document.createElement('li');
//             nameProp.insertAdjacentText('beforeend', ` name: ${name} `);
//             let priceProp = document.createElement('li');
//             priceProp.insertAdjacentText('beforeend', ` price: ${price} `);
//             elemWhatInput.append(authorProp, nameProp, priceProp);
//             count.append(elemWhatInput);
//             }
//         catch (e) {
//             console.log(e);
//         }
       
//         return count
//     }, elemWhereInput)
//     return booksListCreator
// }

function booksList1(books) {
    const booksListCreator = books.reduce((rootElem, element) => {
        try {
            if (Object.keys(element).length < 3) {
            throw new Error(`${JSON.stringify(element)} No ${[ 'author', 'name', 'price' ].filter(el => Object.keys(element).includes(el)==false)} data`);
            }
            const elemWhatInput = document.createElement("ul");
            for (key in element) {
                let listElement = document.createElement('li')
                listElement.innerText =  `${key}: ${element[key]}`
                elemWhatInput.append(listElement);
            }
            rootElem.append(elemWhatInput);
        }
        catch (error) {
            console.log(error);
        }
    return rootElem
    }, elemWhereInput)
    return booksListCreator
}


const books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];


// booksList(books);
booksList1(books);