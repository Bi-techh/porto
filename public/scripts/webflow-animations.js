
document.addEventListener('astro:page-load', () => {
    // Reinitialize Webflow interactions
    if (window.Webflow && window.Webflow.destroy) {
        window.Webflow.destroy();
    }
    if (window.Webflow && window.Webflow.ready) {
        window.Webflow.ready();
    }
    if (window.Webflow && window.Webflow.require) {
        window.Webflow.require('ix2').init();
    }

    // Animate experience blocks
    document.querySelectorAll('.experience-block').forEach((block, index) => {
        setTimeout(() => {
            block.style.opacity = '1';
            block.style.transform = 'none';
        }, index * 200);
    });
});