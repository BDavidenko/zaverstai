const dropdownList = document.querySelector('.articles__dropdown-list');
const tagList = document.querySelectorAll('.tag');

const numbers = [4, 8, 15, 16, 23, 42];

console.log(typeof(tagList));

tagList[0];


// фильтр по тегам
function filterTag(evt) {
  const articleTheme = evt.target.textContent;



  console.log(articleTheme);
}

dropdownList.addEventListener('click', filterTag);
