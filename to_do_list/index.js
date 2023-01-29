const btn_div = document.querySelector(".btn-div");
const sorted_btn = document.querySelector(".sorted-btn");
const v_ul = document.querySelector('.list-ul');
const input = document.querySelector(".input input");;
const v_list = [];
let sorted = true;

function appendList(list) {
    let v_add = '';

    v_list.forEach(v => {
        //<li><span>tesr1</span> <span class="sil"><img src="img/sil.svg" alt=""></span></li>
        v_add += `<li><span>${v}</span> <span class="sil"><img src="img/sil.svg" alt=""></span></li>`

    })
    return v_add;
}

btn_div.addEventListener('click', function () {

    if (input.value.trim().length !== 0) {
        v_list.unshift(input.value);
        input.value = '';
        v_ul.innerHtml = '';
        // v_list.reverse();
        console.log(v_list)

        v_ul.innerHTML = appendList(v_list);
    }
});

sorted_btn.addEventListener('click', function () {
    v_ul.innerHtml = '';
    let v_add = '';
    if (sorted) {
        v_list.sort(function (m, n) {
            return n.localeCompare(m);
        });
        sorted = false;
    }
    else {
        v_list.sort(function (m, n) {
            return m.localeCompare(n);
        });
        sorted = true;
    }
    v_ul.innerHTML = appendList(v_list);

});
