//funkcja otwarcia menu i zamknięcia menu
const menuAnimation = () => {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    const liElement = document.querySelectorAll('.menu__link');
    burger.addEventListener('click', () => {
        menu.classList.toggle('menu__active');
        burger.classList.toggle('toggle');
    })


    liElement.forEach((e) => {
        e.addEventListener('click', () => {
            menu.classList.toggle('menu__active');
            burger.classList.toggle('toggle');
        })
    })

}
menuAnimation();