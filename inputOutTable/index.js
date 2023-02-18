$(document).ready(function () {
    var i = 0;
    var list = [];
    $(".btn_add").click(function () {
        i++;
        var ad = $("#fname").val();
        var soyad = $("#lname").val();
        var soyad_v = "<tr><td>" + i + "</td><td>" + ad + "</td>" + "<td>" + soyad + "</td></tr>";
        list.push(soyad_v);
        $(".tb-1").empty();
        console.log(list);
        for (let index = 0; index < list.length; index++) {

            $(".tb-1").append(list[index]);
            console.log(list[index]);
        }
    });
    $(".btn_rm").click(function(){
        list.pop();
        $(".tb-1").empty();
        i--;
       
        for (let index = 0; index < list.length; index++) {

            $(".tb-1").append(list[index]);
            console.log(list[index]);
        }
    });

});