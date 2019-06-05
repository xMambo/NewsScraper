var cheerio = require("cheerio");
var axios = require("axios");

// Let's tell the console what the server.js is doing.
console.log("\n-----------------------------------------------------------------\n" +
            "Searching for articles from this cool Science web site I found" +
            "\n-----------------------------------------------------------------\n");

// Making a request via axios
axios.get("https://allthatsinteresting.com/tag/news").then(function(response) {

// Load the HTML into cheerio and save it to a variable
var $ = cheerio.load(response.data);


var results = [];

$(".box").each(function(i, element) {

    var title = $(element).find("h2").text();
    var summary = $(element).find(".summary").text();

    var link = $(element).find("a").attr("href");

    results.push({
        title: title,
        summary: summary,
        link: link
    });
});

console.log(results);
});