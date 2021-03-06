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

        container.appendChild(postLink);
        container.appendChild(postDate);
        container.appendChild(postPreview);
        return container; 
    }
}

let articles = [
    new Article (
        "https://medium.com/@tyler.greason/a-quick-introduction-to-modules-in-javascript-6c2716939dfb",
        "A Quick Introduction to Modules in JavaScript",
        "Sep 2nd, 2020",
        "Have you found yourself befuddled by the mess that is your unorganized code? Have you ever wished you could have files that only hold data like variables, functions, and class declarations, and have that data imported by other files, without importing everything else in that file? Have you been driven mad by namespace issues because you keep naming data the same thing over and over in different files and have JavaScript yell at you for it?"
    ),
    new Article (
        "https://medium.com/@tyler.greason/designing-and-building-responsive-websites-what-ive-learned-363704276d3",
        "Designing and Building Responsive Websites: What I’ve Learned",
        "Aug 26th, 2020",
        "Hola y bienvenidos tech readers! I hope you’re doing well and are ready to learn a thing or two about responsive design! I’ve worked with responsive design a lot recently, and that inspired me to share my knowledge on the topic with you. Responsive design can be a bit intimidating, but with the right resources, practice, and a bit of a design-oriented mentality, you’ll be making great looking responsive websites in no time!"
    ),
    new Article (
        "https://medium.com/@tyler.greason/a-collection-of-tech-adjacent-thoughts-9439a8a3299e",
        "A Collection of Tech-Adjacent Thoughts",
        "Aug 19th, 2020",
        "Hey everyone, and welcome to my blog post for this week! I’m on a short time budget, as I’m writing this article in the car on the way to Georgia’s coast to celebrate my 30th birthday! I didn’t quite know what to write about, so I thought why not write a bit about a few things that I’ve wanted to write about and maybe expand upon them later in another article?"
    ),
    new Article (
        "https://medium.com/@tyler.greason/classes-in-javascript-1ecfe96c96a3?sk=f1a87a1de210f746a0cea2cc30a7e1d3",
        "Classes in JavaScript",
        "Aug 12th, 2020",
        "Hey everyone, and welcome to my second article on prototype and classes! This week we’ll review what classes are, how to build and use them, and why you might want to use them over JavaScript’s prototype constructor functions! As always, I’d love to hear some feedback. Comment here, or reach out to me through email, Twitter, GitHub, or my LinkedIn. As of the writing of this article I am actively looking for work. Don’t hesitate to reach out if you’d like to get in touch concerning an employment opportunity."
    ),
    new Article (
        "https://medium.com/@tyler.greason/inheritance-in-javascript-bd9aa1146cb6?source=friends_link&sk=f9facb094b9f7dd8fc417e6cfcc238e1",
        "Inheritance in JavaScript",
        "Aug 5th, 2020",
        "Hi, and welcome to my first multi-part blog post! This week and next I’ll be talking about two types of inheritance in JavaScript: inheritance through prototypes and constructor functions, and inheritance through classes. These articles are for anyone that wants to gain a better understanding of these topics, as classes are a basic programming paradigm that’s important to have a strong grasp on, and prototypes are important to understanding JavaScript. These articles are also for myself; practicing explaining con"
    ),
    new Article (
        "https://medium.com/@tyler.greason/what-i-wish-i-knew-when-i-started-my-job-search-a964edf62528?source=friends_link&sk=ae7021821c658ff4d5f78e808d282c69",
        "What I Wish I Knew When I Started My Job Search",
        "Jul 29, 2020",
        "It’s been three months since I finished my spectacular time with Flatiron School. Since then I have taken time to construct my portfolio and online presence, and made a full time job out of finding a job and improving my repertoire of coding abilities. I have learned quite a bit about job hunting through my own actions and failures, and through asking other developers on LinkedIn what worked for them. There are many things I wish I had known when I started my job search. Today, I’m going to share with "
    ),
    new Article (
        "https://medium.com/@tyler.greason/using-svg-images-in-web-development-3da83165aa92",
        "Using SVG Images in Web Development",
        "Jul 22, 2020",
        "Hey everyone! This week’s post is a short tutorial for anyone looking to learn about SVG graphics quickly and use them in their website."
    ),
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

