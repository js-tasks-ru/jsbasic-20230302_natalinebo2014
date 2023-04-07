function hideSelf() {
  // ваш код...
  const hideSelfBtn = document.querySelector(".hide-self-button");

  hideSelfBtn.addEventListener('click', function() {
    //this.setAttribute('hidden', '');
    this.hidden = true;
  });
}
