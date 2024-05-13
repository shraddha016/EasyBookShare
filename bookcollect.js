document.addEventListener("DOMContentLoaded", function() {
    const bookImages = document.querySelectorAll('.image  img');
    const popupImage = document.querySelector('.popup2-image .first img');
    const popupContainer = document.querySelector('.popup2-image');

    // Add event listeners to each book image
    bookImages.forEach(image => {
        image.addEventListener('click', function() {
            // Set the src attribute of the popup image to the clicked book's image src
            popupImage.src = this.src;
            // Display the popup
            popupContainer.style.display = 'block';
        });
    });

    document.querySelector('.popup2-image span').addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
});

   