
let username = JSON.parse(localStorage.getItem('currentUser'))

if(!username){
    localStorage.setItem("currentUser",JSON.stringify(['clark']))
    console.log('nagdaan')
}else{
    console.log('di nagdaan')
}

console.log(username)