// Кнопка лайк
const likeButton = document.querySelector('.article__like');
const likeNumber = document.querySelector('.article__like-counter');
// Добавление коментария
const commentForm = document.forms.comments; //нашли форму синтаксис только для форм
const commentList = document.querySelector('.comments__list'); //нашли сам отец список куда будет вставлен коментарий
const nameInput = commentForm.elements.name;  //нашли инпут для имени конкретной формы
const textInput = commentForm.elements.text; //нашли инпут для текста конкретной формы
const commentTemplate = document.querySelector('#comment-template').content; //нашли шаблон, синтаксис работает только с шаблонами

function toggleLike() {
  if (likeButton.classList.contains('added')) {
    likeNumber.textContent--;
  } else {
    likeNumber.textContent++;
  }

  likeButton.classList.toggle('added');
}

function addComment(evt) { //evt-event обьявляем функцию добавить коментарий.
  evt.preventDefault(); // отменяем стандартное поведение, разрешаем изменение.

  const comment = commentTemplate.querySelector('.comments__list-item').cloneNode(true); //клонируем саму ЛИ которая полетит в отца в виде коментария
  const userName = comment.querySelector('.comments__name'); // нашли элемент в который будет вставляться текст с инпута имя
  const userText = comment.querySelector('.comments__text'); // нашли элемент в который вставится текст коментария
  userName.textContent = nameInput.value; //указали что текстовый контент будет братсья из инпута
  userText.textContent = textInput.value;
  commentForm.reset(); //обнулили форму после отправки коментария
  commentList.append(comment); //указали отца в который добавляется новый элемент в низ содержимого
}


likeButton.addEventListener('click', toggleLike); //посадили слушателя на кнопку при клике указали функцию
commentForm.addEventListener('submit', addComment); //посадили слушателя на форму при отправке
