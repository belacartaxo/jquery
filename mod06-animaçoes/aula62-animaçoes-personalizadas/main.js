/* $('h1').animate({
    fontSize: '50px'
}, 2000)

$('.course_item h4').on('click', function(){
    $(this).animate({
        wordSpacing: '+=5px',
        padding: '+=20px'
    }, 2000);
}); */

$('footer p').on('click', function(){
    $(this).animate({
        letterSpacing: '+=10px',
    }, 2000, function(){ //função de callback
        alert('aumentou o espaçamento das letras');
    });
});
