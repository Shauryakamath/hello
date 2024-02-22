
const menu = document.querySelector(".menu_burger");
const menuList = document.querySelector(".menu_list");
const times = document.querySelector(".times");
const menuOverlay = document.querySelector(".menu_overlay"); 

menu.addEventListener("click", () => {
    menuList.classList.toggle("active");
    menuOverlay.classList.toggle("active"); 
});

times.addEventListener("click", () => {
    menuList.classList.remove("active");
    menuOverlay.classList.remove("active");
});

//===========================================================


const buttons = document.querySelectorAll('.busibtn');
const busisol = document.querySelectorAll(".busisol");


function togglePayget(event) {
    const targetElement = event.currentTarget; 

    
    const isButton = targetElement.classList.contains('busibtn');
    const isBusisol = targetElement.classList.contains('busisol');

    let payget, img;

    if (isButton) {
        payget = targetElement.closest('.business_parent').querySelector('.payget');
        img = targetElement.querySelector('img');
    }
    
    else if (isBusisol) {
        
        const businessParent = targetElement.closest('.business_parent');
        if (businessParent) {
            payget = businessParent.querySelector('.payget');
            img = businessParent.querySelector('.busibtn img');
        }
    }

    
    if (payget && img) {
        if (payget.style.display === "none" || payget.style.display === "") {
            payget.style.display = "flex";
            img.src = './Assets/arrowdown.png';
        } else {
            payget.style.display = "none";
            img.src = './Assets/greater.png';
        }
    }
}

buttons.forEach(button => {
    button.addEventListener("click", togglePayget);
});

busisol.forEach(business => {
    business.addEventListener("click", togglePayget);
});





