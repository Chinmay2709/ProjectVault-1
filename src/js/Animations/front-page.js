export function front_anim(){

    let AnimationRunning = false;

    // 1-Navigation Animation

    $('#about').on('mouseover',function(){
        
        $('#about').stop().animate({
            "background-color": "#e0e0e0"
        },100);
        
    });
    $('#about').on('mouseout',function(){
        
        $('#about').stop().animate({
            "background-color": "none"
        },200);
        
    });

    $('#contact_us').on('mouseover',function(){
        
        $('#contact_us').stop().animate({
            "background-color": "#e0e0e0"
        },100);
        
    });
    $('#contact_us').on('mouseout',function(){
        
        $('#contact_us').stop().animate({
            "background-color": "none"
        },200);
        
    });

    $('#book').on('mouseover',function(){
        
        $('#book').stop().animate({
            "background-color": "#e0e0e0"
        },100);
        
    });
    $('#book').on('mouseout',function(){
        
        $('#book').stop().animate({
            "background-color": "none"
        },200);
        
    });

    $('#pay').on('mouseover',function(){
        
        $('#pay').stop().animate({
            "background-color": "#e0e0e0"
        },100);
        
    });
    $('#pay').on('mouseout',function(){
        
        $('#pay').stop().animate({
            "background-color": "none"
        },200);
        
    });


    $('#login').on('mouseover',function(){
        
        $('#login').stop().animate({
            "background-color": "#13a75f"
        },100);
        
    });
    $('#login').on('mouseout',function(){
        
        $('#login').stop().animate({
            "background-color": "#000000"
        },200);
        
    });


    // 2-Navigation Animation


    $("#Testimonials").on('mouseover',function(){
        $("#Testimonials").stop().animate({
            "color":"#000000"
        },100);
    });
    
    $("#Testimonials").on('mouseout',function(){
        $("#Testimonials").stop().animate({
            "color":"#ffffff"
        },200);
    });
    
    $("#Blog").on('mouseover',function(){
        $("#Blog").stop().animate({
            "color":"#000000"
        },100);
    });
    
    $("#Blog").on('mouseout',function(){
        $("#Blog").stop().animate({
            "color":"#ffffff"
        },200);
    });
    
    $("#Stories").on('mouseover',function(){
        $("#Stories").stop().animate({
            "color":"#000000"
        },100);
    });
    
    $("#Stories").on('mouseout',function(){
        $("#Stories").stop().animate({
            "color":"#ffffff"
        },200);
    });

    $("#Call_back").on('mouseover',function(){
        $("#Call_back").stop().animate({
            "color":"#000000"
        },100);
    });
    
    $("#Call_back").on('mouseout',function(){
        $("#Call_back").stop().animate({
            "color":"#ffffff"
        },200);
    });

    $("#Locations").on('mouseover',function(){
        $("#Locations").stop().animate({
            "color":"#000000"
        },100);
    });
    
    $("#Locations").on('mouseout',function(){
        $("#Locations").stop().animate({
            "color":"#ffffff"
        },200);
    });

    $('#Apply').on('mouseover',function(){
        
        $('#Apply').stop().animate({
            "background-color": "#000000",
            "color":"#ffffff"
        },100);
    
    });
    $('#Apply').on('mouseout',function(){
        
        $('#Apply').stop().animate({
            "background-color": "#ffffff",
            "color":"#ff2c03"
        },200);
    
    });

    $('#Virtual_assist').on('mouseover',function(){
        
        $('#Virtual_assist').stop().animate({
            "background-color": "#000000"
        },100);
        $('#Virtual_assist').css('background-image',"url('/Include/Images/virtual-assistant-white.png')");
    
    });
    $('#Virtual_assist').on('mouseout',function(){
        
        $('#Virtual_assist').stop().animate({
            "background-color": "#13a75f",
            "color":"#ffffff"
        },200);
        $('#Virtual_assist').css('background-image',"url('/Include/Images/virtual-assistant-white.png')");
    
    });


    // Drop down animations

    // DROP LIST 1 animations STARTS

    $('#Immig_type').on('mouseover',function(){
        
        $('#drop_list-1').css('display','flex');
        $('#Immig_type').stop().animate({
            "color":"#000000"
        },100,function(){
            $('#drop_list-1').css('animation','Nav_animation 300ms forwards');
        });
    });
    $('#drop_list-1, #Immig_type').on('mouseleave',function(){
        
        $('#Immig_type').stop().animate({
            "color":"#ffffff"
        },200, function(){
            $('#drop_list-1').css('display','none');
        });
    });

    $('#skill_immigration').on("mouseover", function(){
        $('#skill_immigration').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#skill_immigration').on("mouseout", function(){
        $('#skill_immigration').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#study').on("mouseover", function(){
        $('#study').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#study').on("mouseout", function(){
        $('#study').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#tourist').on("mouseover", function(){
        $('#tourist').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#tourist').on("mouseout", function(){
        $('#tourist').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#Sponser').on("mouseover", function(){
        $('#Sponser').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Sponser').on("mouseout", function(){
        $('#Sponser').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#Work_Permit').on("mouseover", function(){
        $('#Work_Permit').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Work_Permit').on("mouseout", function(){
        $('#Work_Permit').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#PRC').on("mouseover", function(){
        $('#PRC').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#PRC').on("mouseout", function(){
        $('#PRC').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    // DROP LIST 1 animations ENDS

    // DROP LIST 2 animations STARTS

    $('#Stories').on('mouseover',function(){
        
        $('#drop_list-2').css('display','flex');
        $('#Stories').stop().animate({
            "color":"#000000"
        },100,function(){
            $('#drop_list-2').css('animation','Nav_animation 300ms forwards');
        });
    });
    $('#drop_list-2, #Stories').on('mouseleave',function(){
        
        $('#Stories').stop().animate({
            "color":"#ffffff"
        },200, function(){
            $('#drop_list-2').css('display','none');
        });
    });

    $('#Client_gallery').on("mouseover", function(){
        $('#Client_gallery').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Client_gallery').on("mouseout", function(){
        $('#Client_gallery').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#Client_stories').on("mouseover", function(){
        $('#Client_stories').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Client_stories').on("mouseout", function(){
        $('#Client_stories').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#Honest_reviews').on("mouseover", function(){
        $('#Honest_reviews').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Honest_reviews').on("mouseout", function(){
        $('#Honest_reviews').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    // DROP LIST 2 animations ENDS
    
    // DROP LIST 3 animation STARTS

    $('#Blog').on('mouseover',function(){
        
        $('#drop_list-3').css('display','flex');
        $('#Blog').stop().animate({
            "color":"#000000"
        },100,function(){
            $('#drop_list-3').css('animation','Nav_animation 300ms forwards');
        });
    });
    $('#drop_list-3, #Blog').on('mouseleave',function(){
        $('#Blog').stop().animate({
            "color":"#ffffff"
        },200, function(){
            $('#drop_list-3').css('display','none');
        });
    });

    $('#Client_blog').on("mouseover", function(){
        $('#Client_blog').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#Client_blog').on("mouseout", function(){
        $('#Client_blog').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    $('#QandA_blog').on("mouseover", function(){
        $('#QandA_blog').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#QandA_blog').on("mouseout", function(){
        $('#QandA_blog').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    // DROP LIST 3 animations ENDS

    // DROP LIST 4 animations STARTS

    $('#Locations').on('mouseover',function(){
        
        $('#drop_list-4').css('display','flex');
        $('#Locations').stop().animate({
            "color":"#000000"
        },100,function(){
            $('#drop_list-4').css('animation','Nav_animation 300ms forwards');
        });
    });
    $('#drop_list-4, #Locations').on('mouseleave',function(){
        $('#Locations').stop().animate({
            "color":"#ffffff"
        },200, function(){
            $('#drop_list-4').css('display','none');
        });
    });

    $('#canada').on("mouseover", function(){
        $('#canada').stop().animate({
            'color':'#ffffff',
            'background-color':'#000000'
        },100)
    });
    $('#canada').on("mouseout", function(){
        $('#canada').stop().animate({
            'color':'#000000',
            'background-color':'#fef9f7'
        },100)
    });

    // DROP LIST 4 animations ENDS


    // CARDS ANIMATION STARTS

    // CARD-1 ANIMATION STARTS
    $('.ovo-1-foreground').on("mouseenter",function(){

        
        function positionset(){
            console.log("position set");
            $('.ovo-1-foreground').css('position','relative');
            $('#ovo-1-background').css('position','absolute');
            $('.card-element-container').css('position','absolute');
        }

        $('#ovo-1-background').css('animation','ovo-background-animate 200ms normal ease forwards');
        $('.card-element-container').css('animation','ovo-text-color-animate 200ms normal ease forwards');
        
        $('.ovo-card-button').css('background-color','#ffffff');

        
        $('#ovo-1-background, .card-element-container').on('animationstart',positionset);
        
    });

    $('.ovo-1-foreground').on("mouseleave",function(){

        console.log('mouse left with Animation status: ', AnimationRunning);
            

        $('#ovo-1-background').css('animation','ovo-background-animate-reverse 200ms normal ease forwards');
        $('.card-element-container').css('animation','ovo-text-color-animate-reverse 200ms normal ease forwards');

        $('.ovo-card-button').css('background-color','#transparent');

        $('#ovo-1-background, .card-element-container').on('animationend', function(){
            if($('#ovo-1-background, .card-element-container').css('animation-name') === 'ovo-background-animate-reverse'){
                console.log("position unset");
                $('.ovo-1-foreground').css('position','unset');
                $('#ovo-1-background').css('position','unset');
                $('.card-element-container').css('position','unset');
            }
        });
    
    });
    // CARD-1 ANIMATION ENDS

    // CARD-2 ANIMATION START

    $('.ovo-2-foreground').on("mouseenter",function(){

        
        function positionset(){
            console.log("position set");
            $('.ovo-2-foreground').css('position','relative');
            $('#ovo-2-background').css('position','absolute');
            $('.card-element-container-2').css('position','absolute');
        }

        $('#ovo-2-background').css('animation','ovo-background-animate 200ms normal ease forwards');
        $('.card-element-container-2').css('animation','ovo-text-color-animate 200ms normal ease forwards');
        
        $('.ovo-card-button').css('background-color','#ffffff');

        
        $('#ovo-2-background, .card-element-container-2').on('animationstart',positionset);
        
    });

    $('.ovo-2-foreground').on("mouseleave",function(){

        console.log('mouse left with Animation-2 status: ', AnimationRunning);
            

        $('#ovo-2-background').css('animation','ovo-background-animate-reverse 200ms normal ease forwards');
        $('.card-element-container-2').css('animation','ovo-text-color-animate-reverse 200ms normal ease forwards');

        $('.ovo-card-button').css('background-color','#transparent');

        $('#ovo-2-background, .card-element-container-2').on('animationend', function(){
            if($('#ovo-2-background, .card-element-container-2').css('animation-name') === 'ovo-background-animate-reverse'){
                console.log("position unset");
                $('.ovo-2-foreground').css('position','unset');
                $('#ovo-2-background').css('position','unset');
                $('.card-element-container-2').css('position','unset');
            }
        });
    
    });

    // CARD-2 ANIMATION ENDS

    // CARD-3 ANIMATION START

    $('.ovo-3-foreground').on("mouseenter",function(){

        
        function positionset(){
            console.log("position set");
            $('.ovo-3-foreground').css('position','relative');
            $('#ovo-3-background').css('position','absolute');
            $('.card-element-container-3').css('position','absolute');
        }

        $('#ovo-3-background').css('animation','ovo-background-animate 200ms normal ease forwards');
        $('.card-element-container-3').css('animation','ovo-text-color-animate 200ms normal ease forwards');
        
        $('.ovo-card-button').css('background-color','#ffffff');

        
        $('#ovo-3-background, .card-element-container-3').on('animationstart',positionset);
        
    });

    $('.ovo-3-foreground').on("mouseleave",function(){

        console.log('mouse left with Animation-3 status: ', AnimationRunning);
            

        $('#ovo-3-background').css('animation','ovo-background-animate-reverse 200ms normal ease forwards');
        $('.card-element-container-3').css('animation','ovo-text-color-animate-reverse 200ms normal ease forwards');

        $('.ovo-card-button').css('background-color','#transparent');

        $('#ovo-3-background, .card-element-container-3').on('animationend', function(){
            if($('#ovo-3-background, .card-element-container-3').css('animation-name') === 'ovo-background-animate-reverse'){
                console.log("position unset");
                $('.ovo-3-foreground').css('position','unset');
                $('#ovo-3-background').css('position','unset');
                $('.card-element-container-3').css('position','unset');
            }
        });
    
    });


    // Strong Tag Animation

    $(".regis-text h2 strong").on('mouseover',function(){
        $(this).stop().animate({
            'font-size':'105px'
        },200);
    });
    $(".regis-text h2 strong").on('mouseout',function(){
        $(this).stop().animate({
            'font-size':'100px'
        },200);
    });

    // Strong Tag Animation Ends


    // Form Animation 

    $("#form_wrapper").on('mouseover',function(){
        $("#form_wrapper").stop().animate({
            width:'85%',
            height:'85%'
        },200);
    });
    $("#form_wrapper").on('mouseout',function(){
        $("#form_wrapper").stop().animate({
            width:'80%',
            height:'80%'
        },200);
    });

    // Form Animation Ends

    // CARD-3 ANIMATION ENDS


    // CARDS ANIMATION ENDS

}