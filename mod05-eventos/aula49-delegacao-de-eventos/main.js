/* $('#books_list tbody').on('click', 'tr', function(e){
    $(e.delegateTarget).find('tr').removeClass('trselected');
    //seleciona o elementos que nos delegamos a responsabilidade de ficar atento aos eventos - tbody
    $(this).addClass('trselected');
});

$('#btn_add_book').on('click', function(){
    let tr = `
        <tr>
            <td>Til</td>
            <td>José de Alencar</td>
        </tr>
    `;

    $('#books_list tbody').append(tr);
});

//ao ocorreu esses dois eventos você vai perceber que o campo com o name bio vai executar os dois eventos, um evento geral, e outro específico, isso ococrre pela propagação de eventos 
$('#form_login').on('change', '[name]', function(){
    alert('Elemento mudou. Seu valor: ' + $(this).val());
});

$('#form_login [name=bio]').on('change', function(e){
    e.stopPropagation();
    $(this).css('background', 'red');
});
*/
let entries = 99;

$('.register').append(`<u>Ainda restam ${100 - entries}</u>`);

$('#form_login [type=submit]').on('click', function(e){
    e.preventDefault();
    alert('Você foi cadastrado parabens');
});

if(entries >= 100){
    $('#form_login [type=submit]').off('click');
}