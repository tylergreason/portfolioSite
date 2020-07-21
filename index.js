// console.log(navigator.userAgent)

// fix cover image not showing right on iPhone
// find background element 
const cover = document.getElementById('cover'); 
const bg = Array.from(document.getElementsByClassName('background'))[0]
// if 'iPhone' is in the userAgent, add ios class to the cover element 
if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')){
    cover.classList.add('iPhone');
    // cover.style.height = "0px"
    // bg.style.opacity = 0;
    // bg.style.backgroundAttachment = "scroll"; 
}

// class for articles 
class Article {
    constructor(link, title, date, preview){
        this.link = link;
        this.title = title; 
        this.date = date; 
        this.preview = preview.slice(0,150); 
    }
    create(){
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
    new Article (
        "https://medium.com/@tyler.greason/developing-the-touch-drawer-weve-all-been-waiting-for-f7fd01527a4?sk=4ec54b3950916b0535c218a3bba7207f",
        "Developing the Touch Drawer We’ve All Been Waiting For",
        "Jul 15, 2020",
        "My ongoing side project while looking for work the last couple months has been my Knave app. I wrote a couple weeks back on why I was developing this application and what I learned from it (you can find that article here). Today I want to discuss a big improvement I made on this project: a slide out drawer that works, and feels really slick. Check out the site here and find the GitHub repo here."
    ),
    new Article (
        "https://medium.com/@tyler.greason/hacking-reacts-jsx-into-pure-javascript-document-fragments-57bc2d20506f?sk=b76d05abb28ae86a1873bef149e87582", 
        "Hacking React’s JSX Into Pure JavaScript: Document Fragments", 
        "Jul 8, 2020",
        "There is no doubt that React is an amazing framework. When I first began learning JSX, React’s unique way of rendering HTML elements to the document, I was put off. I had just become accustomed to rendering elements with pure JavaScript through the method I’m sure we all know:"
    ),
    new Article(
        "https://medium.com/@tyler.greason/experimenting-with-mobile-first-design-c4d2b47cf649",
        "Experimenting with Mobile First Design",
        "Jul 1, 2020", 
        "For the last couple weeks I have been working on a small project called Knave App. This application is not finished quite yet, but it’s in a usable state and I wanted to talk about my experience designing and coding it and what I learned."
    ),
    new Article(
        "https://medium.com/@tyler.greason/on-developing-a-good-user-experience-as-someone-who-isnt-a-user-experience-designer-6effb29b8dee",
        "On Developing A Good User Experience As Someone Who Isn’t A User Experience Designer",
        "Jun 24, 2020",
        "It should come as no surprise that I enjoy front end development the most. I enjoy using applications that are fun to use, respond well to user input, and organize their information well. I have learned a good deal using desktop and mobile applications over the years. I am in no way a certified designer, but I don’t think you have to be to notice what does and does not work in application design. Today I’m going to share with you some of the things I have learned over the years in hopes of helping you learn them faster than I did."
    ),  
    new Article (
        "https://medium.com/@tyler.greason/10-tools-and-resources-i-use-for-web-development-7d496e054477", 
        "10 Tools and Resources I Use for Web Development",
        "June 17, 2020", 
        "The internet is full of countless resources for web developers. Almost all of those resources are free, and many are open source as well. Below I detail some of my favorite resources. This list is by no means exhaustive, and I would absolutely love hearing from you about what resources you think others could use."
    ),
    new Article(
        "https://medium.com/weekly-webtips/styled-components-hip-cool-stylish-6fc379a0dd60",
        "Styled Components: Hip, Cool, Stylish",
        "Jun 10, 2020", 
        "If you’re looking into what is hip and cool in the realm of styling these days, you have without a doubt heard of styled-components. Styled components are, as the name implies, a method for styling your components in React. And since component-based programming is probably the future of web development, I think it’s safe to say styled-components are going to be the future of CSS and components. Here, I’ll explain a little bit about them, why I think they’re cool, and what might not be so cool about them."

    ),
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


// // set cover image height so it doesn't change on mobile when vh changes during scroll 
// const windowHeight = window.innerHeight; 
// // find percent of the height the image should be by looking at the .background's height value 
// const background = Array.from(document.getElementsByClassName('background'))[0]
// // check if the user is on mobile (< 800 width)
// if (window.innerWidth < 800){
//     background.style.height = windowHeight + "px"; 
// } else {
//     background.style.height = (windowHeight * .85) + "px";
// }

