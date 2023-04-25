$(window).resize(function(){
    console.info(`A largura do navegador é ${$(window).width()}. A altura é ${$(window).height()}`);
});

$(window).scroll(function(){
    console.info(`Você está na posição ${$(window).scrollTop()}`);
});