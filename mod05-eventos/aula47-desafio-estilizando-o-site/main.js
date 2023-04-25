$(window).scroll(function(){
    scrollChange(0, 50, 'h1');
    scrollChange(50, 150, 'h3.books');
    scrollChange(150, 435, 'h3.register');
});

function scrollChange(minscroll, maxscroll, el){
    if($(window).scrollTop() > minscroll && $(window).scrollTop() < maxscroll){
        $(el).css('color', 'red');
    } else {
        $(el).css('color', 'black');
    }
}