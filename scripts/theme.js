const themeSelect = document.getElementById('theme-select');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSelect.value = savedTheme;
}

themeSelect.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  document.documentElement.setAttribute('data-theme', selectedTheme);
  localStorage.setItem('theme', selectedTheme);
});

resetThemeButton.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'light');
  themeSelect.value = 'light';
  localStorage.removeItem('theme');
});