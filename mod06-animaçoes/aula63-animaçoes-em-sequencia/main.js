$('#init_effect').on('click', function(){
    $('.logo').animate({
        marginTop: '+=90px'
    }, 2000).delay(500)
    .animate({
        marginLeft: '+=300px'
    }).queue(function(){
        $('h1').text('Animação concluida').css('color', 'red');
        $(this).dequeue();
    })//.clearQueue()
    .fadeOut(2000);
});

$('#stop_effect').on('click', function(){
    //$('.logo').stop(true, true);
    $('.logo').finish();
});