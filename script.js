require('dotenv').config();
const apiKey = process.env.apiKey;
const apiPassword = process.env.apiPassword;


const initProductSlider = (containerSelector, leftArrowSelector, rightArrowSelector) => {
    const productsContainer = document.querySelector(containerSelector);
    const leftArrow = document.querySelector(leftArrowSelector);
    const rightArrow = document.querySelector(rightArrowSelector);
    let currentIndex = 0;
    
    const getVisibleProductsCount = () => {
        const containerWidth = productsContainer.offsetWidth;
        const productWidth = document.querySelector(`${containerSelector} .product`).offsetWidth + 20;
        return Math.floor(containerWidth / productWidth);
    };
    
    const moveProducts = (direction) => {
        const visibleProducts = getVisibleProductsCount();
        const maxIndex = Math.max(0, document.querySelectorAll(`${containerSelector} .product`).length - visibleProducts);
    
        if (direction === 'left' && currentIndex > 0) {
            currentIndex--;
        } else if (direction === 'right' && currentIndex < maxIndex) {
            currentIndex++;
        }
    
        productsContainer.style.transform = `translateX(-${currentIndex * (document.querySelector(`${containerSelector} .product`).offsetWidth + 20)}px)`;
    
        leftArrow.disabled = currentIndex === 0;
        rightArrow.disabled = currentIndex === maxIndex;
    };

    const handleResize = () => {
        const visibleProducts = getVisibleProductsCount();
        const maxIndex = Math.max(0, document.querySelectorAll(`${containerSelector} .product`).length - visibleProducts);
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        productsContainer.style.transform = `translateX(-${currentIndex * (document.querySelector(`${containerSelector} .product`).offsetWidth + 20)}px)`;
    };
    
    leftArrow.addEventListener('click', () => moveProducts('left'));
    rightArrow.addEventListener('click', () => moveProducts('right'));

    window.addEventListener('resize', handleResize);
    
    leftArrow.disabled = true;
    rightArrow.disabled = false; 
};

const initImageSlider = () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.pic-slider .slides img');
    const totalSlides = slides.length;
    let interval;

    const changeSlides = (direction) => {

        slideIndex += direction;

        if(slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }

        updateSlider();
    };

    const updateSlider = () => {
        const offset = -slideIndex * 100;
        document.querySelector('.pic-slider .slides').style.transform = `translateX(${offset}%)`;

    };

    const startAutoSlide = () => {
        clearInterval(interval);
        interval = setInterval (() => {
            changeSlides(1);
        }, 5000);
    }

    const prevButton = document.querySelector('.pic-slider .prev');
    const nextButton = document.querySelector('.pic-slider .next');

    prevButton.addEventListener('click', ()=> {
        changeSlides(-1);
        startAutoSlide();   
    });
    nextButton.addEventListener('click', ()=> {
        changeSlides(1);
        startAutoSlide();
    });

    startAutoSlide();

    const picSlider = document.querySelector('.pic-slider');
    
    picSlider.addEventListener('mouseenter', () => {
        prevButton.style.opacity = '1';
        nextButton.style.opacity = '1';
    });

    picSlider.addEventListener('mouseleave', ()=> {
        prevButton.style.opacity = '0';
        nextButton.style.opacity = '0';
    });
};

const initVideoPlaylist = () => {
    console.log('Initializing video playlist...');
    const videoElement = document.getElementById('myVideo');
    const videos = [
        '/vids/blk_guy_mean_mug.mp4',
        '/vids/blk_woman_dancing.mp4',
        '/vids/blk_male_boxer.mp4',
        '/vids/blk_woman_lipstick.mp4',
        '/vids/sexy_girl_twerk.mp4'
    ];

    let currentVideoIndex = 0;

    videoElement.addEventListener('ended', ()=> {
        console.log(`Video ended, current video index: ${currentVideoIndex}`);
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        console.log(`Next Video Index: ${currentVideoIndex}`);

        videoElement.src = videos[currentVideoIndex];
        videoElement.load();
        videoElement.play().catch(error => {
            console.error('Error playing the video:', error);
        });
    });

    videoElement.src = videos[currentVideoIndex];
    videoElement.load();
    videoElement.play().catch(error => {
        console.error('Error playing the first video:', error);
    });
};

document.addEventListener('DOMContentLoaded', ()=> {
    initProductSlider('.product-container-tops .products', '.left-arrow-tops', '.right-arrow-tops');
    initProductSlider('.product-container-bottoms .products', '.left-arrow-bottoms', '.right-arrow-bottoms');
    initImageSlider();
    initVideoPlaylist();
})

