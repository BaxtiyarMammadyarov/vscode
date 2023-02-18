const register = document.getElementById("register");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
let arr = [];
let obj ={};

register.addEventListener('click',(e)=>{
    obj.name = fullname.value;
    obj.email = email.value;
    obj.password = pass.value;
    console.log(obj)
    arr.push(obj);
    console.log(arr)
    localStorage.setItem('db',JSON.stringify(arr) );
    window.location.pathname = "/web_front_end_telimi/login/index.html"

})