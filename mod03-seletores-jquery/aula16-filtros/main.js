$('#toggle-cars').click(function(){
    let hiddenCars =  $('.cars li:hidden').length;
    (hiddenCars > 0 ) ? $('.cars li').show() : $('.cars li').hide();
})

$('#register button').css('background', 'green');

$('[type=radio]').change(function(){
    console.log('ola')
    let value = $('input:checked').val();
    let gender = (value == 'M') ? 'Masculino' : 'Feminino';

    alert(`Você selecionou o gênero ${gender}`);
});

$('#register :submit').css('background', 'red').click((e) => {
    e.preventDefault();
    console.log('você clicou no botão submit')
});