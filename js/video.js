//load categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error) )
}; 

//load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error) )
};

//displayCategories
/**
 * 
 * @param 
    "category_id": "1001",
    "category": "Music"
}} categories 
 */

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    //categories are now in category
    categories.forEach((item) => {
        //create a category button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        categoryContainer.append(button);
    })
}

loadCategories();