// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines", { useNewUrlParser: true });

// Routes

// A GET route for scraping the website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://allthatsinteresting.com/tag/news").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    var result = [];

    // Now, we grab every h2 within an article tag, and do the following:
    $(".box").each(function(i, element) {

        var title = $(element).find("h2").text();
        var summary = $(element).find(".summary").text();
        var link = $(element).find("a").attr("href");

        result.push({
            title: title,
            summary: summary,
            link: link
        });