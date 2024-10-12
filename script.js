document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const openDropdown = document.querySelector('.dropdown.open');
        
        if (openDropdown && openDropdown !== this.parentElement) {
            openDropdown.classList.remove('open');
        }
        
        this.parentElement.classList.toggle('open');
    });
});
