const nav = document.querySelector('.nav-bar');
const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    console.log('click')
    nav.classList.toggle('off')
    btn.classList.toggle('active')
});

