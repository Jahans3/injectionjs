/**
 * Created by jahansj on 27/11/2015.
 */

var main = document.getElementsByClassName('container')[0];

var defaults = {
    'cwidth' : 450,
    'cheight' : 450,
    'cBgColour' : 'red'
};

var setBase = function(element, object){
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    element.style.height = window.innerHeight.toString() + 'px';
    element.style.width = window.innerWidth.toString() + 'px';
    element.style.backgroundColor = object.cBgColour;
};

setBase(main, defaults);


// Initiate function
//    set outer wrapper and inner wrappers (grid of divs)
//    import relevant css
//    create elements (build widgets)


