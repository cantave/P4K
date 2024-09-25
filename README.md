# Play 4 Keeps Apparel - Frontend Project

Welcome to the Play 4 Keeps Apparel project! This collaborative effort between **[Your Name]** and **[Friend's Name]** aims to develop a responsive frontend webpage that integrates seamlessly with a Shopify store. Our primary goal is to enhance our skills in frontend development and API consumption, utilizing this project as a practical learning experience.

## Project Overview

This project focuses on building a user-friendly webpage that showcases apparel products while connecting to the Shopify backend. We are refining our skills in:

- **HTML/CSS**: Crafting a clean, responsive layout using semantic HTML and modern CSS techniques.
- **JavaScript**: Implementing interactivity and dynamic content updates by consuming the Shopify API.
- **Responsive Design**: Ensuring our webpage looks great on all devices, from desktops to smartphones.

## Current Progress

We've made significant strides in the development of the webpage. Below is an overview of our current implementation.

### HTML Structure

Our HTML structure includes:

- A **header** with a logo and navigation links.
- A **video and image slider** to display engaging content.
- A section to showcase **tops and bottoms** with navigational arrows for product viewing.
- A **footer** with links to additional information and social media.

### CSS Styling

Our CSS includes responsive styles for:

- Layout adjustments using flexbox for alignment and spacing.
- Custom styling for buttons, product containers, and footer sections.

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

## Next Steps

Moving forward, we plan to:

1. **Integrate the Shopify API**: Fetch real-time product data and dynamically display it on the webpage.
2. **Enhance Responsiveness**: Fine-tune styles and interactions for optimal mobile experience.
3. **User Authentication**: Implement user login/signup features to enhance user engagement.

## Getting Started

To view the project:

1. Open the `index.html` file in your browser to see the current implementation.

## Note

This project is a closed collaboration between the authors, and we are not seeking contributions from outside parties. Please do not clone or fork this repository.

## License

This project is licensed under the MIT License.

