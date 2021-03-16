// узлы элементы
const dropdownList = document.querySelector('.articles__dropdown-list');
const articleList = document.querySelectorAll('.flex-item');
// текстовые узлы
const showAllBtnTxt = dropdownList.querySelector('#show-all-btn').textContent;

// фильтрует статьи по тегам
function filterTag(evt) {
  const articleTheme = evt.target.textContent;

  articleList.forEach(article => {
    const tag = article.querySelector('.tag').textContent;

    if (articleTheme === tag || articleTheme === showAllBtnTxt) {
      //article.classList.add('article-show');
      article.classList.remove('article-hide');
    } else {
      article.classList.add('article-hide');
      //article.classList.remove('article-show');
    }
  });
}

dropdownList.addEventListener('click', filterTag);
