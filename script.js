document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const dropdown = this.parentElement;
        const allDropdowns = document.querySelectorAll('.dropdown');
        
        // Close other open dropdowns
        allDropdowns.forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('open');
            }
        });
        
        // Toggle the clicked dropdown
        dropdown.classList.toggle('open');
    });
});
