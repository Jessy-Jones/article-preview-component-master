const shareButton = document.querySelector('#share-icon');
const shareBox = document.querySelector('#share-box');

shareButton.addEventListener('click', () => {
  shareBox.classList.toggle('hidden');
})