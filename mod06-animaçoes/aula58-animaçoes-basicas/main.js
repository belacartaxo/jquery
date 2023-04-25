/* $('.courses_list div:first').hide();
$('.courses_list div:hidden').show(2000);
$('.courses_list div:eq(2)').toggle(2000);*/

$('.btn_toggle_item').on('click', function(){
    //método prev - navega pela árvore do DOM e seleciona o elemento mais próximo que se enquadra dentro do seletor informado
    $(this).prev('.course_item_inner').toggle(500);
});