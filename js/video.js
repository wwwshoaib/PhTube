//load categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
};

//load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch((error) => console.log(error))
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

//display videos 

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    //categories are now in category
    videos.forEach((video) => {
        //create a category button
        const card = document.createElement('div');
        card.classList = 'card card-compact bg-base-100';
        card.innerHTML = `
        <figure>
            <img
            src="${video.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        videoContainer.append(card);
    })
}


//call functions

loadCategories();
loadVideos();