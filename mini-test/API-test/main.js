const body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = `Type: posts`;
body.insertAdjacentElement('afterbegin', h1);

let btn = document.createElement('button');
btn.innerText = 'posts';
body.insertAdjacentElement('beforeend', btn);
btn.style.color = 'white';
btn.style.backgroundColor = 'red';


let btn2 = document.createElement('button');
btn2.innerText = 'photos';
body.insertAdjacentElement('beforeend', btn2);


let btn3 = document.createElement('button');
btn3.innerText = 'albums';
body.insertAdjacentElement('beforeend', btn3);

async function getPosts() {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => getTitle(json));

        
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener ('click', function() {
    btn.style.color = 'white';
    btn.style.backgroundColor = 'red';
    btn2.style.color = 'black';
    btn2.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.style.backgroundColor = 'white';
    let ul = document.querySelector('ul');
    body.removeChild(ul);
    getPosts();
});


function getTitle(json) {
    let ul = document.createElement('ul');
        body.insertAdjacentElement('beforeend', ul);
        for (let i = 0 ; i < json.length; i++) {
            let li = document.createElement('li');
            li.innerText = `${json[i].title}`;
            ul.insertAdjacentElement('beforeend', li)
        }
}

btn2.addEventListener('click', function() {
    btn2.style.color = 'white';
    btn2.style.backgroundColor = 'red';
    btn.style.color = 'black';
    btn.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.style.backgroundColor = 'white';
    let ul = document.querySelector('ul');
    body.removeChild(ul);
    getPhotos();
})

async function getPhotos() {
    try {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => getPhotosTitle(json));

        
    } catch (error) {
        console.log(error);
    }
}

function getPhotosTitle(json) {
    let ul = document.createElement('ul');
        body.insertAdjacentElement('beforeend', ul);
        for (let i = 0 ; i < json.length; i++) {
            let li = document.createElement('li');
            li.innerText = `${json[i].title}`;
            ul.insertAdjacentElement('beforeend', li)
        }
}

getPosts();

btn3.addEventListener('click', function() {
    btn3.style.color = 'white';
    btn3.style.backgroundColor = 'red';
    btn.style.color = 'black';
    btn.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.style.backgroundColor = 'white';
    let ul = document.querySelector('ul');
    body.removeChild(ul);
    getAlbums();
})


async function getAlbums() {
    try {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => getAlbumsTitle(json));

        
    } catch (error) {
        console.log(error);
    }
}

function getAlbumsTitle(json) {
    let ul = document.createElement('ul');
        body.insertAdjacentElement('beforeend', ul);
        for (let i = 0 ; i < json.length; i++) {
            let li = document.createElement('li');
            li.innerText = `${json[i].title}`;
            ul.insertAdjacentElement('beforeend', li)
        }
}