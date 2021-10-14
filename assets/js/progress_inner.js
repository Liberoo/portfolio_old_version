const html = document.documentElement;
const progress = document.createElement('div');
const progressInner = document.createElement("div");
progress.className = "x-progress";
progressInner.className = "x-progress__inner";

progress.append(progressInner);
document.body.prepend(progress);

window.addEventListener("scroll", () => {
    const height = html.scrollHeight - window.innerHeight;
    const scrolled = html.scrollTop / height * 100;
    progressInner.style.width = `${scrolled}%`;

})



const navigation = document.querySelector('.menu');


window.addEventListener("scroll", () => {
    if (html.scrollTop > 200) {
        navigation.classList.add('menu__shadowOnScroll')

    }
    else {
        navigation.classList.remove('menu__shadowOnScroll')

    }
})

