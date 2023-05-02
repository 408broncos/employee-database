# employee-database

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node.js    | [https://www.w3schools.com/nodejs/nodejs_filesystem.asp](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)  
| Express    | [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html) 
| Express    | [https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use](https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use) 



## Description 

[Visit the Deployed Site](https://cryptic-inlet-51137.herokuapp.com/)

For this project I was given a task to create a note taking generator. For this ask it was a little bit more simple than my previous assignments but a lot more steps to even get the application started. In this assignment we were given starter codes to help us get started, this included: an index.js, index and note htmls, json packages and a CSS file. Our task was to use what we were given and create a deployed note taking generator that gives the user the ability to add a title to their notes and a save and add button to store their notes and create new ones.

## Markdown


![Untitled_ Apr 27, 2023 9_27 PM](https://user-images.githubusercontent.com/126821868/235054278-273dbc9e-7c23-4c0b-ad0c-1890e7490ce4.gif)



## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/notes.html'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'));
  });

function createDb() {
  fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), err => {
    if (err) throw err;
  });
}
```

```html
  <link rel="stylesheet" href="/css/styles.css" />
  </head>

  <body>
    <nav class="navbar bg-info">
      <a class="navbar-brand text-light p-3" href="/notes">Note Taker </a>
      <div class="icons">
        <i class="fas fa-save text-light save-note"></i>
        <i class="fas fa-plus text-light new-note"></i>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 list-container">
          <div class="card">
            <ul class="list-group"></ul>
          </div>
        </div>
        <div class="col-8">
          <input
            class="note-title"
            placeholder="Note Title"
            maxlength="28"
            type="text"
          />
          <textarea class="note-textarea" placeholder="Note Text"></textarea>
        </div>
      </div>
    </div>
    <script src="/js/index.js"></script>
  </body>
</html>

```

In these code snippets I struggled a lot with deploying the notes.html file with correct CSS styling done to it. I spent a long time trying to figure out what the problem was and how to solve it, I finally realized that my script sources were linked incorrectly and also discovered that I was not inputting the required coding structure for the server to request the html files. After correcting and debugging my code I was able to get my notes.html file to correct deploy the page with its original CSS styling done to it.


## Usage 

For usages I used a lot of the activities we worked on in class and a whole lot of research with ways to problem solve road blocks that I ran into.


## Learning Points 

This assignment for me was also a little challenging since working with Node.js is still something I need to work. However, after researching and discovering the answers to my problems, I was able to really understand where and how to fix my code especially being able to understand Node.js a lot more.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
