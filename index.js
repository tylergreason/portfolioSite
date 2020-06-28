// console.log(navigator.userAgent)

// fix cover image not showing right on iPhone
// find background element 
const cover = document.getElementById('cover'); 
// if 'iPhone' is in the userAgent, add ios class to the cover element 
if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')){
    cover.classList.add('iPhone')
}

// class for articles 
class Article {
    constructor(link, title, date, preview){
        this.link = link;
        this.title = title; 
        this.date = date; 
        this.preview = preview; 
    }
    create = () => {
        let container = document.createElement('div'); 
        container.classList.add('blogpost'); 

        let postLink = document.createElement('a'); 
        postLink.href = this.link; 
        postLink.target = 'blank'; 
        postLink.classList.add('blogpost__title'); 
        postLink.innerText = this.title; 

        let postDate = document.createElement('div'); 
        postDate.classList.add('blogpost__date'); 
        postDate.innerText = this.date; 

        let postPreview = document.createElement('div'); 
        postPreview.classList.add('blogpost__preview'); 
        postPreview.innerText = this.preview; 

        let postFadeout = document.createElement('div'); 
        postFadeout.classList.add('fadeout'); 

        container.appendChild(postLink);
        container.appendChild(postDate);
        container.appendChild(postPreview);
        container.appendChild(postFadeout);
        return container; 
    }
}

let articles = [
    new Article(
            "https://medium.com/swlh/how-im-making-my-css-more-efficient-e2e585d01f4b",
            "How I'm Making My CSS More Efficient",
            "Jun 2, 2020",
            "I find one of the most exciting things about code to be its community’s penchant for efficiency. I love efficiency. My professional background is in commercial "
    ),
    new Article(
            "https://medium.com/@tyler.greason/data-structures-all-about-stack-heap-and-queue-in-javascript-430b669f58cc",
            "Data Structures — All About Stack, Heap, and Queue In JavaScript",
            "May 24, 2020",
            "The stack, heap, and queue data structures are hugely important to JavaScript. They make up the underlying structure of JavaScript’s"
    ),
    new Article(
            "https://medium.com/@tyler.greason/how-ive-kept-productive-at-coding-bootcamp-d2e709243454",
            "How I’ve Kept Productive at Coding Bootcamp",
            "Feb 6, 2020",
            "Here we are again. Another two weeks down. Where has the time gone? What has been 14 days feels like two months, and simultaneously like"
    ),
    new Article(
        "https://medium.com/@tyler.greason/what-i-learned-during-my-first-three-weeks-at-a-coding-bootcamp-bd0cfae04aac",
        "What I Learned During My First Three Weeks at a Coding Bootcamp",
        "Jan 23, 2020",
        "On January 6th, 2020, I started my journey toward becoming a full-time software developer with Flatiron School’s Immersive Software"
    )
]

// append all articles to the blogposts__container div 
articles.forEach(article => {
    let newArticle = article.create(); 
    blogposts__container.appendChild(newArticle); 
})
