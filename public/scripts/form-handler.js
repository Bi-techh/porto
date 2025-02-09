
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Get success and error messages from form attributes or use defaults
    const successMessage = form.getAttribute('data-success') || 'Thank you for your submission!';
    const errorMessage = form.getAttribute('data-error') || 'Oops! Something went wrong.';
    
    // Get the form's submit button
    const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.value = 'Sending...';
    }
    
    try {
        // Convert formData to object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Log form submission (since we don't have a backend)
        console.log('Form submitted:', data);
        
        // Show success message
        alert(successMessage);
        form.reset();
    } catch (error) {
        console.error('Form submission error:', error);
        alert(errorMessage);
    } finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.value = submitButton.getAttribute('data-wait') || 'Submit';
        }
    }
    
    return false;
}

// Initialize forms on page load
document.addEventListener('astro:page-load', () => {
    document.querySelectorAll('form').forEach(form => {
        // Preserve Webflow form styling
        form.classList.add('w-form');
        
        // Add submit handler
        form.onsubmit = handleSubmit;
    });
});