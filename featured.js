let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 4000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     const bookImages = document.querySelectorAll('.image img');
//     const popupImage = document.querySelector('.popup2-image img');
//     const popupContainer = document.querySelector('.popup2-image');

//     // Add event listeners to each book image
//     bookImages.forEach(image => {
//         image.addEventListener('click', function() {
//             // Set the src attribute of the popup image to the clicked book's image src
//             popupImage.src = this.src;
//             // Display the popup
//             popupContainer.style.display = 'block';
//         });
//     });

//     document.querySelector('.popup2-image span').addEventListener('click', function() {
//         popupContainer.style.display = 'none';
//     });
// });