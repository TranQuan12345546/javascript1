const province = document.getElementById('province');
const option1 = document.createElement('option');
option1.innerText = '--chọn thành phố--';
province.insertAdjacentElement('afterbegin', option1);


const district = document.getElementById('district');
const option2 = document.createElement('option');
option2.innerText = '--chọn quận, huyện--';
district.insertAdjacentElement('afterbegin', option2);


const commune = document.getElementById('commune');
const option3 = document.createElement('option');
option3.innerText = '--chọn xã, phường--';
commune.insertAdjacentElement('afterbegin', option3);


async function getProvince() {
    let res = await axios.get("https://provinces.open-api.vn/api/p/");
    let provinceLength = res.data.length;
    for(let i = 0; i < provinceLength; i++) {
        let option = document.createElement('option');
        option.innerText = res.data[i].name;
        option.value = `${res.data[i].code}`;
        province.insertAdjacentElement('beforeend', option);
    }
    province.addEventListener('change', function() {
        option1.disabled = true;
        getDistrict(province.value);
    })
}




async function getDistrict(provinceCode) {
    let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
    let district2 = res.data.districts.length;
    let child = district.lastElementChild;
    option2.disabled = true;

    while (child) {
        if (child == option2) {
            break;
        } 
        // xóa child
        district.removeChild(child);
        
        // gán child bằng phần tử con cuối cùng mới
        child = district.lastElementChild;
        
    }

    for(let i = 0; i < district2; i++) {
        let option = document.createElement('option');
        option.innerText = res.data.districts[i].name;
        option.value = `${res.data.districts[i].code}`;
        district.insertAdjacentElement('beforeend', option);
    }

    district.addEventListener('change', function() {
        
        getCommune(district.value);
    })
} 


async function getCommune(districtCode) {
    let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
    let child = commune.lastElementChild;

    while (child) {
        if (child == option3) {
            break;
        } 
        // xóa child
        commune.removeChild(child);
        
        // gán child bằng phần tử con cuối cùng mới
        child = commune.lastElementChild;
    }
    let communeLength = res.data.wards.length;
    for (let i = 0; i < communeLength; i++) {
        let option = document.createElement('option');
        option.innerText = res.data.wards[i].name;
        option.value = `${res.data.wards[i].code}`;
        commune.insertAdjacentElement('beforeend', option);
    }
    option3.disabled = true;
} 


getProvince();