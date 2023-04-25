$('h1').on('dblclick', function(){
    $(this).text('Hcode treinamentos - jQuery');
});

$('#form_login').on('submit', function(e){
    e.preventDefault();
    console.log('Aqui estão os valores do formulário', $(this).serializeArray());
});

$('#form_login [name=bio]').on('blur', function(e){
    $(e.target.form).trigger('submit');
});