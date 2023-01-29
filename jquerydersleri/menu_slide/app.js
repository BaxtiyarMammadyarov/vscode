$(document).ready(function () {
    $(".menu-list").click(function (e) { 
        $(".menu-1").slideToggle();
        
    });

    $(window).resize(function () { 
        if($(window).width()>800){
            $(".menu-1").removeAttr(attributeName);
        }
    });
});