$('header').on('initPage', function(){ //vai ococrrer quando a página iniciar - esse evento não é do jQuery, nos mesmos que criamos ele
    $(this).find('h1').append(' - Seja bem vindo').css({
        color: 'blue',
        left: '100px'
    });

    $(this).find('img').animate({
        width: '400px'
    });
});