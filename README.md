# Animated Loading Button

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/withaarzoo/Animated-Loading-Button)](https://github.com/withaarzoo/Animated-Loading-Button/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/withaarzoo/Animated-Loading-Button)](https://github.com/withaarzoo/Animated-Loading-Button/network)
[![GitHub issues](https://img.shields.io/github/issues/withaarzoo/Animated-Loading-Button)](https://github.com/withaarzoo/Animated-Loading-Button/issues)

A customizable and animated loading button created with HTML, CSS, and JavaScript.

## Demo

![demo](https://github.com/withaarzoo/Animated-Loading-Button/assets/59678435/32555eb7-6c48-4a5f-892f-f0beae46ead0)

## Features

- Attractive animation on button click.
- Easy to integrate into your web projects.
- Customizable styles.

## Installation

Include the following CSS and JavaScript files in your project:

```html
<link rel="stylesheet" href="path/to/animated-loading-button.css">
<script src="path/to/animated-loading-button.js"></script>
```

## Usage

Add the HTML structure for the button in your HTML file:

```html
<button class="custom-btn">
    <i class="custom-icon ri-send-plane-fill"></i>
    <span class="custom-text">Send Message</span>
    <span class="custom-loading-animate"></span>
</button>
```

Initialize the button in your JavaScript file:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".custom-btn");

    function toggleLoadingState() {
        button.classList.toggle("loading");
    }

    function handleButtonClick() {
        toggleLoadingState();
        setTimeout(toggleLoadingState, 3000);
    }

    if (button) {
        button.addEventListener("click", handleButtonClick);
    }
});
```

## Customization

- You can customize the button styles by modifying the CSS in the `animated-loading-button.css` file.
- Adjust the loading animation duration and appearance in the same CSS file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [inspirecoding](https://codepen.io/inspirecoding).

## Contributing

Feel free to contribute by [opening an issue](https://github.com/withaarzoo/Animated-Loading-Button/issues) or creating a pull request.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/withaarzoo/Animated-Loading-Button/issues) or contact the maintainer.

## Author

[Aarzoo](https://www.youtube.com/@codewithaarzoo)

---

### Like this project? Support it by giving a star! ⭐

Thank you for using Animated Loading Button!
