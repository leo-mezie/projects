
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');


function initialize(){
    setTimeout(function(){
        loader.style.opacity=0;
        loader.style.display='none';

        main.style.display='block';
        //using arrow function here
        setTimeout(() => ( main.style.opacity = 2), 50);
       
    }, 4000);
}

initialize(); 