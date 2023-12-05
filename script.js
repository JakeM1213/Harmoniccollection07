document.addEventListener('DOMContentLoaded', function () {
    // This function will be executed when the DOM is fully loaded
    var h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = 'Hello, Summer!';
    }
});
