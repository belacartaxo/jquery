/* $('.courses_list .course_item_inner:eq(4)').slideUp(1500);
$('.courses_list .course_item_inner:eq(4)').slideDown(1500);
*/
$('.btn_toggle_item').on('click', function(){
    $(this).prev('.course_item_inner').slideToggle(1500);
    });
    
    $('#disable_effects').on('click', function(){
        jQuery.fx.off = !jQuery.fx.off;
    })