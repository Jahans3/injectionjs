/**
 * Created by jahansj on 27/11/2015.
 */

var main = document.getElementsByClassName('container')[0];

main.style.height = '150px';
main.style.width = '150px';
main.style.backgroundColor = 'red';

var interval = 0;

interval = 50 ? setInterval(function(){
    main.style.height = (interval * 3).toString() + 'px';
    main.style.height = (interval * 3).toString() + 'px';
    interval++;
},50) : null;

