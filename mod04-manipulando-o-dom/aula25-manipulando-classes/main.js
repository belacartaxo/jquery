/*  $('header .menu ul li a').addClass('stylized_menu');
$('header .menu ul li').removeClass('stylized_menu'); */
$('header .menu ul li a').click((e)=>{
    e.preventDefault();
    $(this).toggleClass('stylized_menu'); //refere-se ao elemento a
});