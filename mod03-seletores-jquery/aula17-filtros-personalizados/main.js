$.expr[':'].carsCentury21 = (e) => {
    return ($(e).data('ano') > 2000);
}

$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){
    return (e) => ($(e).data('ano') < year);
}) 