const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".toggle,.toggle-ball,.side-menu-icon,.sidebar,.navbar-container,.navbar,.container");

ball.addEventListener("click",()=>{
    items.forEach(item => {
        item.classList.toggle("active")
    })
})
