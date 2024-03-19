export function road_map_anim(){
    // Register
    $("#Register").on('mouseover',function(){
        $("#Register .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#Register").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#Register").on('mouseout',function(){
        $("#Register .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#Register").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Register Ends

    // Response Starts
    $("#time_response").on('mouseover',function(){
        $("#time_response .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#time_response").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#time_response").on('mouseout',function(){
        $("#time_response .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#time_response").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Response Ends

    // Process Starts
    $("#understand_process").on('mouseover',function(){
        $("#understand_process .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#understand_process").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#understand_process").on('mouseout',function(){
        $("#understand_process .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#understand_process").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Process Ends

    // Join US Starts
    $("#join_us").on('mouseover',function(){
        $("#join_us .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#join_us").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#join_us").on('mouseout',function(){
        $("#join_us .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#join_us").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Join US Ends

    // Submission Starts
    $("#submission").on('mouseover',function(){
        $("#submission .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#submission").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#submission").on('mouseout',function(){
        $("#submission .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#submission").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Submission Ends

    // Fly Starts
    $("#fly").on('mouseover',function(){
        $("#fly .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim 200ms forwards ease');
        $("#fly").css('animation','road-map-anim 200ms forwards ease');
    });

    $("#fly").on('mouseout',function(){
        $("#fly .map-h2_editor, .map-p_editor").css('animation','road-map-text-anim-reverse 200ms forwards ease');
        $("#fly").css('animation','road-map-anim-reverse 200ms forwards ease')
    });
    // Fly Ends


}