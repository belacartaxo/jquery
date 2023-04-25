/* $('[name]').focus(function(){
    $(this).css('background', 'yellow');
}); */

/* $('[name]').blur(function(){
    alert(`Você digitou ` + $(this).val());
}); */

/* $('.form-group').focusin(function(){
    console.log('você selecionou um campo');
}); */

/* $('.form-group').focusout(function(){
    console.log('saiu o foco');
});  */

/* $('[name]').change(function(){
    console.log(`Valor do campo: ${$(this).val()}`);
});  */

/* $('[type=text]').select(function(){
    console.log(`Você selecionou o valor deste campo`);
});  */

$('form').submit(function(e){
    e.preventDefault();
    console.log(`Formulário postado`);
    console.log($(this).serializeArray());
}); 