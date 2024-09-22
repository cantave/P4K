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

initProductSlider('.product-container-tops .products', '.left-arrow-tops', '.right-arrow-tops');
initProductSlider('.product-container-bottoms .products', '.left-arrow-bottoms', '.right-arrow-bottoms');
