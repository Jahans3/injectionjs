/**
 * Created by jahansj on 27/11/2015.
 */

var defaults = {
    'gridSize' : 6
};

var setBase = function(){
    var main = document.getElementsByClassName('container')[0];

    document.body.style.padding = 0;
    document.body.style.margin = 0;

    main.style.height = window.innerHeight.toString() + 'px';
    main.style.width = window.innerWidth.toString() + 'px';
    main.style.backgroundColor = 'lightgrey';

    defineGrid(main, defaults);
};

var defineGrid = function(element, object){

    // Create required amount of divs in an N x 2 grid
    for (var i = 0; i < object.gridSize; i++){
        var gridItem = document.createElement('div');

        i > (object.gridSize / 2) - 1 ? gridItem.className = 'upper_' + i : gridItem.className = 'lower_' + i;

        gridItem.style.width = (window.innerWidth / (object.gridSize / 2));
        gridItem.style.height = (window.innerHeight / 2);

        element.appendChild(gridItem);
    }

    // Get all elements matching upper_* and lower_*
    // Define sizes and stuff
    var flag = false;
    var count = 0;
    var upper = document.querySelectorAll('[class*="upper_"]');
    var lower = document.querySelectorAll('[class*="lower_"]');

    while (upper.length > count){

        upper[count].style.width = ((window.innerWidth / object.gridSize) * 2).toString() + 'px';
        upper[count].style.height = (window.innerHeight / 2).toString() + 'px';
        upper[count].style.margin = '0';
        upper[count].style.padding = '0';
        upper[count].style.display = 'inline-block';

        count++;
    }

    if (document.getElementsByClassName('upper_' + (object.gridSize - 1).toString())[0].style.display === 'inline-block'){
        flag = true;
    }

    while (count > 0 && flag){

        lower[count-1].style.width = ((window.innerWidth / object.gridSize) * 2).toString() + 'px';
        lower[count-1].style.height = (window.innerHeight / 2).toString() + 'px';
        lower[count-1].style.margin = '0';
        lower[count-1].style.padding = '0';
        lower[count-1].style.display = 'inline-block';

        count--;
    }
    sharedStyles();
};

var sharedStyles = function(){
    var upperCells = document.querySelectorAll('[class*="upper_"]');
    var lowerCells = document.querySelectorAll('[class*="lower_"]');
    var allCells = [];

    for (var i = 0; i < (upperCells.length * 2); i++){
        i < upperCells.length ? allCells.push(lowerCells[i]) : allCells.push(upperCells[i - upperCells.length]);
    }

    var colours = ['#DEA5A4', '#FFB347', '#779ECB', '#CB99C9', '#C23B22', '#966FD6'];

    for (var i = 0; i < allCells.length; i++){
        console.log(allCells[i])
        allCells[i].style.backgroundColor = colours[i];
    }
};

setBase(defaults);


// Initiate function
//    set outer wrapper and inner wrappers (grid of divs)
//    import relevant css
//    create elements (build widgets)


