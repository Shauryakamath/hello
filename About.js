const imageContain = document.querySelector('.image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let scrollAmount = 0;

function scrollImages(direction) {
    const imageWidth = imageContain.clientWidth;
    const containerWidth = imageContain.scrollWidth;
    
    scrollAmount += direction * imageWidth;
    imageContain.style.transform = `translateX(-${scrollAmount}px)`;
    
    if (scrollAmount === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (scrollAmount >= containerWidth - imageWidth) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

const btn=document.getElementById("btn");

btn.addEventListener('click',function(){
    window.location.href = 'index.html';
})

//===========================






