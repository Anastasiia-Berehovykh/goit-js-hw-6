const categoriesEl = document.getElementById('categories').children.length;
console.log('Number of categories:', categoriesEl);

const categoryItemEl = document.querySelectorAll('h2');
categoryItemEl.forEach((title) => {
    console.log('Category: ', title.textContent);
    console.log('Elements: ', title.nextElementSibling.children.length);
});
    


 




