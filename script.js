document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const sections = document.querySelectorAll('.menu-section');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');

            const targetId = category.href.split("#")[1];
            sections.forEach(section => {
                section.classList.toggle('hidden', section.id !== targetId);
            });
        });
    });
}); 

// go back
function goBack() {
  // Ensures compatibility even if history stack is empty
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert("No previous page in history!");
  }
}
