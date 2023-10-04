//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the button and dropdown elements
    var button = document.querySelector('input[type="button"]');
    var dropdown = document.getElementById('colorSelect');

    // Add click event listener to the button
    button.addEventListener('click', function () {
        // Get the selected index
        var selectedIndex = dropdown.selectedIndex;

        // Check if any option is selected
        if (selectedIndex !== -1) {
            // Remove the selected option
            dropdown.remove(selectedIndex);
        }
    });
});
