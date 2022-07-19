const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

burger.addEventListener('click', () => {
     links.classList.toggle('show-links');
     if (links.classList.contains('show-links')) {
         console.log('cest le burger');
         burger.src = 'icons/burger/close.png';
     } else {
         burger.src = "icons/burger/burger.png";
     }
})

/* let numberClicked = 0;
 const evenOrOdd = (number) => {
    if (number%2 === 0) {
        return true;
    } else {
        return false;
    }
}

burger.addEventListener('click', () => {
    numberClicked++;
    if (evenOrOdd(numberClicked)) {
        links.style.overflow = 'hidden';
        links.style.height = '0';
    } else {
        links.style.overflow = 'unset';
        links.style.height = 'unset';
    }
}) */

