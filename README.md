# portfolioSite

Portfolio site

# Turning this into a blog

## Structure

This would be a lot easier with JavaScript, or with a backend. The reason being, if I want users to be able to visit a specific blog post without making a separate html file for each post, then either:

1. When the user visit a blog post's page (EG tylergreason.com/blog/4-this-is-the-post-title) I'd need to generate the blog post using JavaScript (whether it's vanilla or with a library like React) from a local database of blog posts, likely html stored as a string somewhere.
2. I'd store the blog posts in a database. This is probably the easiest backend application to write. The Blog entity would have an index (all blog posts) or could GET specific blog posts given a blog id argument.

If making a blog is going to be a reality, then I'd want to just make an Angular application because that would be fastest. Then I could go back later and incorporate a backend if I wanted to. But the Angular application would be easy-peasy:

- Home page - acts as a sort of landing page. Has a link to the blog, and external links to my GitHub and etcetera.
- Blog - lists all blog posts in reverse chronological order (newest first).
  - Renders an array of `<tmgm-blog-post>` components.
- Blog/blogTitle - Renders one `<tmgm-blog-post>` component. Uses the last part of the route to the page to find the blog post in the `blogPosts` object (see below).
- Honestly, I think I could have this up and running in an hour.

```ts
const blogPosts = {
  // could also be a Map.
  "4-this-is-the-post-title": `
        <h1>This is the Post Title</h1>
        <p>Here is blog post text</p>
        ...etc
    `,
};
```

## Blog post ideas

- Stationary
  - Reviewing each of my fountain pens and other favorite pens.
  - Reviewing papers:
    - Tomoe river paper.
    - Rhodia paper.
    - Fabriano notebooks.
  - How and why I make notebooks.
- Tech opinions: exploring what I'm interested in or what I'm using:
  - What it's like to write in Angular.
  - What I like about Java
  - What I don't like about Spring.
  - IntelliJ vs VsCode/Codium.
  - How I use AI when I work.
  - Job searching in the age of AI.
- Travel
  - Recollecting places I've been.
    - Japan: what I did and didn't like.
    - Same for Ireland.
- Tech reviews
  - Framework laptop review.
  - Pixel 9 Pro review.
  - Supernote (maybe?).
  - M3 Macbook Pro.
-
