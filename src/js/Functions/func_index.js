export function front_func(){
    window.addEventListener("scroll", function(){
        // console.log(this.scrollY * 0.1);
        if(this.scrollY >= 200){
         
            $('#second_nav').css('position','fixed');   

        }

        if(this.scrollY <= 0){
            
            $('#second_nav').css('position','relative');
            $('#nav2_list').stop().slideDown(400);    

        }
    });

    $(".form").on('mouseover',function(){

        $('#nav2_list').stop().slideUp(200);
    
    });
    $("#Road_MAP").on('mouseover',function(){
        
        $('#nav2_list').stop().slideDown(400);
    
    });

    $("#other-visa-options").on('mouseover',function(){

        // console.log("mouseover OVO");
        $('#nav2_list').stop().slideUp(200);
    
    });
    $("#other-visa-options").on('mouseout',function(){

        // console.log("mouseout OVO");
        $('#nav2_list').stop().slideDown(400);

    });

    



}

