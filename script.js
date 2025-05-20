const toggleBtn = document.getElementById('toggleBtn');

// Function: Toggle Theme and Save to localStorage
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Trigger animation on paragraph
  const text = document.querySelector('.fade-text');
  text.style.animation = 'none'; // reset
  void text.offsetWidth; // reflow
  text.style.animation = 'fadeIn 1s forwards'; // reapply
}

// Load theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
};

toggleBtn.addEventListener('click', toggleTheme);
