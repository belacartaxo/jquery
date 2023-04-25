/* $('h1').mousedown(()=>{
    console.log('apertei o mouse');
}); */

/* $('h1').mouseup(()=>{
    console.log('soltei o mouse');
}); */

/* $('h1').click(()=>{
    console.log('clickei no mouse');
}); */

/* $('h3.books').click(function(){
    $(this).text('Fui clicado');
}); */

/* $('img').contextmenu(function(){
    alert('clicamos com o botão direito');
}); */

/* $('table tbody tr').dblclick(function(){
    $(this).css({
        background: 'black',
        color: 'white'
    });
    alert('clicamos duas vezes');
}); */

/* $('table tbody tr').mouseenter(function(){
    $(this).addClass('trselected');
    console.log('mouse passando por cima');
});

$('table tbody tr').mouseleave(function(){
    $(this).removeClass('trselected');
    console.log('mouse saindo do elemento');
}); */

/* $('table tbody tr').hover(function(){
    $(this).addClass('trselected');
    console.log('mouse saindo do elemento');
}, function(){
    $(this).removeClass('trselected');
    console.log('mouse saindo do elemento');
}); */

$('table tbody tr').mousemove(function(e){
    console.log(e.pageX, e.pageY);
    console.log('mouse se movendo');
});