var Calls = 0;
export function image_animRoll(){

    Calls++;
    if(Calls == 1){
        $("#img-5, #banner_display h2").stop().animate({
            opacity: 0
        },1500,function(){
            $("#banner_display h2").html("Hold The <strong>Vision</strong>, and Trust The <strong>Process</strong>");
            $("#banner_display h2").animate({
                opacity:1
            },500);
        });
    }

    if(Calls == 2){
        $("#img-4, #banner_display h2").stop().animate({
            opacity: 0
        },1500,function(){
            $(".element_wrapper").css("justify-content","right");
            $("#banner_display h2").html("Shapping Your <strong>Future.</strong>");
            $("#banner_display h2").animate({
                opacity:1
            },500);
        });
    }
    if(Calls == 3){
        $("#img-3, #banner_display h2").stop().animate({
            opacity: 0
        },1500,function(){
            $(".element_wrapper").css("justify-content","left");
            $("#banner_display h2").html("Fullfill Your <strong>Dreams</strong>");
            $("#banner_display h2").animate({
                opacity:1
            },500);
        });
    }
    if(Calls == 4){
        $("#img-2, #banner_display h2").stop().animate({
            opacity: 0
        },1500,function(){
            $("#banner_display h2").html("Welcome To Visa Masters <strong>Canada.</strong>");
            $("#banner_display h2").animate({
                opacity: 1
            },500);
        });
    }
    if(Calls == 5){
        $("#banner_display h2").animate({
            opacity: 0
        },function(){

            $("#banner_display h2").html("<strong>Dream</strong> Big,<strong>Work</strong> Hard, and <strong>Follow</strong> Us.");
            $("#img-5,#img-4, #img-3, #img-2, #banner_display h2").stop().animate({
                opacity: 1
            },1500);
        });
        Calls = 0;
    }
    
}