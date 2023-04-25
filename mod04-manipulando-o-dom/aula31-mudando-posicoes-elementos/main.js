//retorna a posição baseando-se no documento inteiro
/* console.log($('form').offset()); //para saber a posição do elemento  
$('form').offset({top: 5, left: 10}); //para alterar a posição do elemento na tela            */

//retorna a posição baseando-se no elemento pai
console.log($('form p').position()); //para saber a posição do elemento  
//não permite definir uma nova posição 

$('.cars li').wrap('<b></b>');