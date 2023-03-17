let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

//a,
console.log("a, Thêm sản phẩm vào product");
products.push({
    name: 'Iphone 12 Pro Max',
    price: 51000000,
    brand: 'Samsung',
    count: 3,
})
console.log(products);

//b
console.log("b, Xoá sản phẩm có brand samsung");
for (let i = 0; i < products.length; i++) {
    if(products[i].brand == 'Samsung') {
    products.splice(products[i], 1)
    }
}

console.log(products);
//c
console.log("c, Sắp xếp giá tăng dần");
products.sort(function(a, b){
    return a.price - b.price;
})

console.log(products);
    
//d
console.log("c, Sắp xếp số lượng giảm dần")
products.sort(function(a, b){
    return b.count - a.count;
})
console.log(products);

    
//e
console.log('Lấy ra 2 sp bất kỳ')
let b = [];
b.push(products[Math.floor(Math.random() * (products.length + 1))]);
b.push(products[Math.floor(Math.random() * (products.length + 1))]);
console.log(b)

//vì sau khi sắp xếp thì kết quả mảng products bị thay đổi nên console.log ở phần c, d sẽ ra kết quả giống nhau