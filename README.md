# Play 4 Keeps Apparel - Frontend Project

Welcome to the Play 4 Keeps Apparel project! This collaborative effort between my friend and I aims to develop a responsive frontend webpage that integrates seamlessly with a Shopify store. Our primary goal is to enhance our skills in frontend development and API consumption, utilizing this project as a practical learning experience.

## Project Overview

This project focuses on building a user-friendly webpage that showcases apparel products while connecting to the Shopify backend. We are refining our skills in:

- **HTML/CSS**: Crafting a clean, responsive layout using semantic HTML and modern CSS techniques.
- **JavaScript**: Implementing interactivity and dynamic content updates by consuming the Shopify API.
- **Responsive Design**: Ensuring our webpage looks great on all devices, from desktops to smartphones.

## Current Progress

### HTML Structure
- Developed the main layout with a header, product sliders, and a footer.
- Implemented sections for videos and product images, ensuring a clear structure for content organization.

### CSS Styling
- Applied custom styles for the header, sliders, and footer.
- Ensured responsive design principles are implemented to adapt to different screen sizes.
- Integrated a custom font using `@font-face`, currently under testing to ensure correct loading.

### Liquid Functionality
- Utilized Liquid to dynamically load products from collections.
- Integrated image URLs and video sources using Shopify's templating language.
- Ensured proper asset loading through Liquid filters.

### JavaScript Functionality

The JavaScript code implements a product slider for both tops and bottoms, allowing users to navigate through the product images seamlessly. Key features include:

- **Dynamic product display**: Adjusts the visible product count based on the container width.
- **Navigation controls**: Enables left and right navigation with visual feedback for disabled states.
- **Responsive resizing**: Adapts the slider to window size changes, ensuring consistent user experience.

Here's a brief look at our JavaScript implementation for the product slider:

```javascript
const initProductSlider = (containerSelector, leftArrowSelector, rightArrowSelector) => {
    // Initialization logic for the product slider
    // ...
};

initProductSlider('.product-container-tops .products', '.left-arrow-tops', '.right-arrow-tops');
initProductSlider('.product-container-bottoms .products', '.left-arrow-bottoms', '.right-arrow-bottoms');
````
## Next Steps
- **Font Integration**: Finalize and test the custom font integration to ensure it displays correctly across all devices.
- **Additional Features**: Consider adding animations to transitions within sliders to enhance user experience.
- **Testing**: Conduct thorough testing across different devices and browsers to identify any layout or functionality issues.
- **Documentation**: Create detailed documentation for future contributors and users.
- **Deployment**: Publish the theme as the homepage for the Shopify Storefront.

## Getting Started

To view the project:

1.Click on the image below to be redirected to a youtube video demonstrating the progress that has been made to date.

<div align="center">

[![Demo Video](https://img.youtube.com/vi/jj6SBzvcUE4/0.jpg)](https://www.youtube.com/watch?v=jj6SBzvcUE4)

</div>


## Note

This project is a closed collaboration between the authors, and we are not seeking contributions from outside parties. Please do not clone or fork this repository.

