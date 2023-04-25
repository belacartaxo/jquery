$('.courses_list .course_item_inner:eq(3)').fadeOut(2000);

$('.courses_list .course_item_inner:eq(3)').fadeIn(2000, function(){
    $(this).css('background', 'red')
});

$('.logo img').fadeTo(2000, 0.3);

$('.btn_toggle_item').on('click', function(){
    $(this).prev('.course_item_inner').fadeToggle(500);
});