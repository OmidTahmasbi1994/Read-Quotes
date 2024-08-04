var i = 0;

function changeQuote()
{
    var quotes = document.getElementById('center').getElementsByTagName('p') ;
    i++ ;
    if(i == quotes.length)
        i = 0;

    if(i==0)
        quotes[quotes.length-1].style.display = 'none' ;
    else
        quotes[i-1].style.display = 'none' ;

    quotes[i].style.display = 'block' ;
}

var textColor = []
var index = 0
function changeBackground()
{
    var page = document.getElementById('container') ;
    var backgrounds = ['lime' , 'deeppink' , 'yellow' , 'aqua' , 'greenyellow' , 'magenta' , 'gold' , 'aquamarine'] ;
    index++ ;

    if(index==backgrounds.length)
        index = 0
    
    page.style.backgroundColor = backgrounds[index]
}

var counter = 0;

function responsiveChangeQuote()
{
    var quotes = document.getElementById('responsiveCenter').getElementsByTagName('p') ;
    counter++ ;
    if(counter == quotes.length)
        counter = 0;

    if(counter==0)
        quotes[quotes.length-1].style.display = 'none' ;
    else
        quotes[counter-1].style.display = 'none' ;

    quotes[counter].style.display = 'block' ;
}