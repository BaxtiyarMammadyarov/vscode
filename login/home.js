addEventListener('load',(e)=>{

  const user = JSON.parse(sessionStorage.getItem("user")) ;
  let arr = JSON.parse(localStorage.getItem("db")) ;
  arr.forEach(element => {
    if(element.email === user.email && element.password === user.password){
      document.querySelector("h1").innerHTML+=`  ${element.name}`
    }
  });
})

const logout = document.querySelector("#logout");

logout.addEventListener('click',(e)=>{
  window.location.pathname = "/web_front_end_telimi/login/index.html"
})
