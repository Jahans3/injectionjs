/**
 * Created by jahansj on 27/11/2015.
 */

var main = document.getElementsByClassName('container')[0];

var defaults = {
    'cwidth' : 450,
    'cheight' : 450,
    'cBgColour' : 'red'
};

var setDimensions = function(element, object){
    element.style.height = object.cheight.toString() + 'px';
    element.style.width = object.cwidth.toString() + 'px';
    element.style.backgroundColor = object.cBgColour;
};

setDimensions(main, defaults);


// Initiate function
//    import relevant css
//    create elements
//


