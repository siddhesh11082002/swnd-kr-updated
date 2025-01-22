import { fetchGalleryImages } from './galleryFetcher.js';

document.addEventListener('DOMContentLoaded', async function () {
    const heroSection = document.querySelector('.hero-section');
    let imagePaths = [];

    async function initializeGallery() {
        imagePaths = await fetchGalleryImages();
        if (imagePaths.length > 0) {
            preloadImage(imagePaths[0]);
            changeBackgroundImage();
        } else {
            console.warn('No images found in the gallery.');
        }
    }

    function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }

    let currentIndex = 0;
    function changeBackgroundImage() {
        if (imagePaths.length === 0) return;
        heroSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }

    setInterval(changeBackgroundImage, 4000);
    await initializeGallery();
});
