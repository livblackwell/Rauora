// Dropdown functionality
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Refresh back to landing page
window.onbeforeunload = function () {
    window.location.href = 'index.html';  // Change 'index.html' to your actual landing page filename
};
