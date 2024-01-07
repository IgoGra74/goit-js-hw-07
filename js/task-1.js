const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;

  const itemSubtitle = categoryItem.querySelector('h2');
  itemSubtitle.classList.add('js-item-subtitle');

  const itemList = categoryItem.querySelector('ul');
  itemList.classList.add('js-item-list');

  const categoryElements = categoryItem.querySelectorAll('ul li');

  categoryElements.forEach(listItem => {
    listItem.classList.add('js-list-item');
  });

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
