document.querySelectorAll('.dropdown-header').forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.parentElement;
        const allDropdowns = document.querySelectorAll('.dropdown');

        // Close all other dropdowns except the one clicked
        allDropdowns.forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('open');
            }
        });

        // Toggle the clicked dropdown open/close
        dropdown.classList.toggle('open');
    });
});
