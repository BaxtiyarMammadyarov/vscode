$(document).ready(function(){
    var amount = parseFloat($("#loan").val());
    var period = parseInt($("#period").val());
    var rate = parseInt($("#rate").val());
    var month2 =$("#month2").val();
    var month = new Date(month2);
    var ayliqOdenis = (amount*rate/100+amount)/period;
    var table = $("#table")
    $(".button:eq(0)").click(function(){
    var tr = $("tr");
    for (let index = 0; index < period; index++) {
       
        var td1 =$("td").html= index+1;
        tr.append(td1);
        var td2 = $("td").html = ayliqOdenis;
        tr.append(td2);

        var td3 = $("td").html = addMonths(1,month);
        tr.append(td3);
        month = addMonths(1,month);    
    }
    table.append(tr);

    });

   


});
