const dropdownList = document.querySelector('.articles__dropdown-list');
const articleList = document.querySelectorAll('.flex-item');



// console.log(articleList);




// фильтр по тегам
function filterTag(evt) {
  const articleTheme = evt.target.textContent;

  articleList.forEach(article => {
    const tag = article.querySelector('.tag').textContent;

    if (tag !== articleTheme) {
      article.classList.add('article-hide');
      article.classList.remove('article-show');
    } else {
      article.classList.add('article-show');
      article.classList.remove('article-hide');
    }

    if (articleTheme == 'все статьи') {
      article.classList.remove('article-hide');
      article.classList.add('article-show');
    }
  });
}

dropdownList.addEventListener('click', filterTag);
