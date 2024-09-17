document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const dropdown = this.parentElement;
        dropdown.classList.toggle('open');
    });
});
