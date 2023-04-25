/* $('#form_login [name=username]').keydown(function(e){
    console.log(`Você apertou a tecla com o código ${e.keyCode}`);
}); */

/* $('#form_login [name=username]').keyup(function(e){
    console.log(`Você soltou a tecla com o código ${e.keyCode}`);
}); */

$('#form_login [name=username]').keypress(function(e){
    console.log(`Você está pressionando a tecla com o código ${e.keyCode}`);
});