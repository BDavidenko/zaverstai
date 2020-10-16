let likeButton = document.querySelector('.article__like');
let likeNumber = document.querySelector('.article__like-counter');

likeButton.onclick = function() {
  if (likeButton.classList.contains('added')) {
    likeNumber.textContent--;
  } else {
    likeNumber.textContent++;
  }

  likeButton.classList.toggle('added');
  }
