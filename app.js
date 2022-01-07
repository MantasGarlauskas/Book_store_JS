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