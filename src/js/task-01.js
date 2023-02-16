const categoriesEl = document.getElementById('categories').children.length;
console.log('Number of categories:', categoriesEl);

const categoryItemEl = document.querySelectorAll('h2');
categoryItemEl.forEach((item) => {
    console.log('Category: ', item.textContent);
    console.log('Elements: ', item.nextElementSibling.children.length);
});
    


 




