const btn = document.getElementById('btn');
const select = document.getElementById('breed-list');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    // Sau khi có data thì hiển thị kết quả trên giao diện
    
    btn.addEventListener('click', function() {
        let ul = document.querySelector('ul');
        console.log(ul);
        let child = ul.lastElementChild;
        while (child) {
            // xóa child
            ul.removeChild(child);
        
            // gán child bằng phần tử con cuối cùng mới
            child = ul.lastElementChild;
        }
        if (res.data.message[`${select.value}`].length == 0) {
            let li = document.createElement('li');
            li.innerText = 'Không có sub';
            ul.insertAdjacentElement('beforeend', li);
        } else {
            getSubBreedList();
        }
        
    })
    renderBreed(res.data.message)
}


async function getSubBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breed/hound/list")
    // Sau khi có data thì hiển thị kết quả trên giao diện
    console.log(res.data.message);
    for (i in res.data.message) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.innerText = res.data.message[`${i}`];
        a.href = '#!';
        li.insertAdjacentElement('afterbegin', a);
        let ul = document.querySelector('ul');
        ul.insertAdjacentElement('beforeend', li)
        a.addEventListener('click', function() {
            getRandomImage();
        })
    }
}


async function getRandomImage() {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}



function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM

    // Cách 1: Sử dụng for ... in
    // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
    for (i in breeds) {
        let option = document.createElement('option')
        option.innerHTML = i;
        select.insertAdjacentElement('afterbegin', option)
        
    }
}

getBreedList()


