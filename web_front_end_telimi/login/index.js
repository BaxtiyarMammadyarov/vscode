const login = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
ar = []
login.addEventListener('click',(e)=>{
   let arr = JSON.parse(localStorage.getItem("db")) ;
   arr.forEach(element => {
     if(element.email === email.value){
        if(element.password === pass.value){
            window.location.pathname = "/web_front_end_telimi/login/home.html"
        }
        else{
            pass.value = "";
            alert("Incorrect password")
        }
     } 
     else{
        window.location.pathname = "/web_front_end_telimi/login/registre.html"
     }
    });

  
})