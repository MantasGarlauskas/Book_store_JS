console.log('page loaded');

let data = [];
const container = document.querySelector('.book__container');

const render = () => {
    container.innerHTML = '';
    data.forEach(element => {
        const divMain = document.createElement('div');
        const img = document.createElement('img');
        const author = document.createElement('p');
        const title = document.createElement('p');
        const price = document.createElement('p');
        const button = document.createElement('button')
        img.src = element.img;
        img.classList.add('book__card__img')
        author.textContent = element.author;
        author.classList.add('book__card__author');
        title.textContent = element.title;
        title.classList.add('book__card__title');
        price.textContent = 'eu ' + element.price;
        price.classList.add('book__card__price');
        button.textContent = 'add to chart';
        button.addEventListener('click', () => {
            document.querySelector('#chart_money').textContent = 'eu ' + element.price;
        })
        button.classList.add('book_card_button')
        divMain.appendChild(img, author, title, price);
        divMain.appendChild(author);
        divMain.appendChild(title);
        divMain.appendChild(price);
        divMain.appendChild(button);
        divMain.classList.add('book__card');
        container.appendChild(divMain)
    })
}

fetch('https://in3.dev/knygos/')
    .then(response => response.json())
    .then(strukura => {
        console.log(strukura);
        data = strukura;
        render();
    });

const searchInput = document.querySelector('input#search_input');

searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(data.filter(person => {
            return person.author.includes(value)
        }))
    }
});

function setList(results) {

    for (const person of results) {
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // // adding a class to each item of the results
        // resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(data.author)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        container.appendChild(resultItem)
    }
}