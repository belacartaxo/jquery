$('.books').append(' - <u>Marque seus favoritos mas essa ação não pode ser desfeita</u>');

$('#books_list tbody tr').one('click', function(){
    if(!$(this).hasClass('trselected')){
        $(this).addClass('trselected');
    }else{
        $(this).removeClass('trselected');
    }
});