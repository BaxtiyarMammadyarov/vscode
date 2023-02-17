const inp = document.querySelector("#inp");
const list = document.querySelector(".list");

const url = "https://randomuser.me/api?results=50";
let arr = [];
fetch(url)
.then((res) => res.json())
.then((data)=>{
   arr = [...data.results]   
});

inp.addEventListener('keyup',(e)=>{
    console.log("test");
    list.innerHTML="";
    arr.filter((e)=>{
        return (e.name.first.includes(inp.value) || e.name.last.includes(inp.value))? true : false;
      
    }).forEach((el)=>{
        list.innerHTML+=`<li>
        <img src = '${el.picture.medium}' /><br/>
        <span>${el.name.first} ${el.name.last}</span>
        </li>`
    })
    
})