function toggleText() {
  // ваш код...
  const toggleTextButton = document.querySelector(".toggle-text-button");
  const text = document.getElementById('text');

  toggleTextButton.addEventListener('click', function() {
    if (text.hasAttribute('hidden')) text.removeAttribute('hidden');
    else text.setAttribute('hidden', '');
  });
}
