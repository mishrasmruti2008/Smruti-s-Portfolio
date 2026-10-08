// Theme Toggle Functionality
function setTheme(themeName) {
  const lightBtn = document.getElementById('light-theme-btn');
  const darkBtn = document.getElementById('dark-theme-btn');

  if (themeName === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
    localStorage.setItem('theme', 'light');
  }
}

// Preserve Theme Preference Across Reloads
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});