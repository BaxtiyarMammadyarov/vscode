const btn_div = document.querySelector(".btn-div");
const sorted_btn = document.querySelector(".sorted-btn");
const v_ul = document.querySelector('.list-ul');
const input = document.querySelector(".input input");
let v_list = [];
let id = 1;
let sorted = true;


function appendList(list) {
    let v_add = '';

    v_list.forEach(v => {
        //<li><span>tesr1</span> <span class="sil"><img src="img/sil.svg" alt=""></span></li>
        v_add += `<li class ='row' ><span>${v.name}</span> <button class="sil" onclick = deleteRow(${v.id})><img src="img/sil.svg" alt=""></button></li>`

    })
    return v_add;
}

function deleteRow(row){
  
   v_list = v_list.filter(v => {return v.id !==row});
   
    v_ul.innerHTML = appendList(v_list);
    
  }

btn_div.addEventListener('click', function () {

    if (input.value.trim().length !== 0) {

        let obj = {
            "id": id,
            "name": input.value
        }
        id++
        v_list.unshift(obj);
        input.value = '';
        v_ul.innerHtml = '';
        // v_list.reverse();
    

        v_ul.innerHTML = appendList(v_list);
    }
});

sorted_btn.addEventListener('click', function () {
    v_ul.innerHtml = '';
    let v_add = '';
    if (sorted) {
        v_list.sort(function (m, n) {
            return n.name.localeCompare(m.name);
        });
        sorted = false;
    }
    else {
        v_list.sort(function (m, n) {
            return m.name.localeCompare(n.name);
        });
        sorted = true;
    }
    v_ul.innerHTML = appendList(v_list);

});


