# Sci News Scraper

This app scrapes news articles from https://allthatsinteresting.com/tag/news. It will scrape the Headline, image, and link. Then it will store to the mongoDb.

[Live Demo](https://news-scraper-npr.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. I will assume that you already have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed locally. See deployment for notes on how to deploy the project on a live system.

1. Install dependencies
2. In your CLI, enter **mongod**
3. In a new CLI window, go to root of directory and enter **node server.js**
4. In browser, navigate to **http://localhost:3000**

### Dependencies

You will need to npm install the following node modules:

1. express
2. express-handlebars
3. mongoose
4. body-parser
5. cheerio
6. request

Since I have included a package.json file, you do not need to install dependencies by name. Simply run the following in the root of your directory:

```
npm install
```


## Screenshots

**Article search home screen**

![screenshot-1](https://i.imgur.com/VhR7fas.png)

**Article comments modal**

![screenshot-2](https://i.imgur.com/uHUyrhi.png)

## Future Updates

1. [ ] Make 'remove' button successfully remove articles from the saved articles page
2. [ ] Polish comment section UI