function hideSelf() {
  // ваш код...
  const hideSelfBtn = document.querySelector(".hide-self-button");

  hideSelfBtn.addEventListener('click', function() {
    console.log(this)
    this.setAttribute('hidden', '');
  });
}
