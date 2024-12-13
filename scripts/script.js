let menuButton = document.getElementById('menu-button');
let menuOne = document.getElementById('header');
let menuTwo = document.getElementById('menu2');
let close = document.getElementById('close');

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY
    if(scrollPos > 100) {
        menuOne.classList.add('header-mini')
    }else {
        menuOne.classList.remove('header-mini')
    }
})

menuButton.addEventListener('click', function() {
    // menuOne.style.display = 'none';
    menuTwo.style.display = 'flex';
});

close.addEventListener('click', function () {
    menuOne.style.display = 'block';
    menuTwo.style.display = 'none';
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');
    this.reset();
});