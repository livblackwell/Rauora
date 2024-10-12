document.querySelectorAll('.dropdown-header').forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.parentElement;
        
        // Toggle only the clicked dropdown
        dropdown.classList.toggle('open');

        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('open');
            }
        });
    });
});
