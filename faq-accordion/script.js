// Get all faq elements
const faqs = document.querySelectorAll('.faq');

// Loop through each faq element
faqs.forEach(faq => {
    // Get the toggle button and text content
    const toggleButton = faq.querySelector('.faq-toggle');
    const faqText = faq.querySelector('.faq-text');
    
    // Add click event listener to toggle button
    toggleButton.addEventListener('click', () => {
        // Toggle active class on faq element
        faq.classList.toggle('active');
        // Toggle visibility of faq text
        faqText.classList.toggle('active');
    });
});

