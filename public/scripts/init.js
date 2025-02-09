// Initialize Webflow
window.Webflow = window.Webflow || [];
window.Webflow.push(function() {
    // Add touch class if needed
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        document.documentElement.classList.add('w-mod-touch');
    }
    document.documentElement.classList.add('w-mod-js');
});
