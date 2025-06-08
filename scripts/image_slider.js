const images = [
    'images/cart1.png',
    'images/store1.png'
];

// Define the interval for changing images (5 seconds = 5000 milliseconds)
const SLIDESHOW_INTERVAL = 5000;

// Variable to keep track of the current image index
let currentImageIndex = 0;

// Get reference to the HTML element that will have the background image
const slideshowBackgroundContainer = document.querySelector('customer_welcome');

// Function to update the displayed background image
function updateSlideshow() {
    // Set the background-image style property of the div
    slideshowBackgroundContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Preload images to prevent flickering (optional but recommended for background images)
function preloadImages() {
    images.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
        img.onerror = () => {
            console.error(`Failed to preload image: ${imagePath}. Using fallback for display.`);
            // Optionally, you could replace the entry in the 'images' array with a fallback URL here
        };
    });
}

// This function runs when the entire window has loaded
window.onload = function() {
    // Preload images
    preloadImages();

    // Initialize the slideshow with the first image
    updateSlideshow();

    // Set up the interval to change background images
    setInterval(() => {
        // Increment the image index
        currentImageIndex = (currentImageIndex + 1) % images.length;
        // Call the function to update the background
        updateSlideshow();
    }, SLIDESHOW_INTERVAL);
};