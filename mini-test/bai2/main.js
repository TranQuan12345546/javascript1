users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function usersKey1(users) {
    let result = users.filter(function (user, index, users){
        return user.age > 25 && user.isStatus === true; 
    })
    return result;
}

console.log(usersKey1(users));

function usersKey2(users) {
    let result = users.sort(function(a, b) {
        return a.age - b.age;
    })
    return result;
}

console.log(usersKey2(users));