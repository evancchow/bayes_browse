// The key url:
// http://scholar.google.com/scholar?start=00&q=machine+learning&hl=en
// (see the parameters)

/* Given the base url to a Google scholar query for X (say, machine learning),
    scrape a random (weighted, later) URL and return it. */
function scrape(scholarURL) {
    /* Query the web page so you can scrape it. */
    /* This is the first thing you need to return to. Either use
        Google Scholar, or maybe even JSTOR. */

    /* Count number of <a> elements on the page so you
        can choose one at random. */
    var numPapers = $('a').

    return scholarURL;
}

/* Display a URL in the box. When you click it, it opens up the url in
    the same tab. */
function display(URL) {
    /* First, delete any existing links, with jQuery. */
    $("a").remove();

    /* Create a box for the link with the URL as an attribute. */
    var urlBox = document.createElement('a');
    urlBox.setAttribute("id", "urlContainer")
    urlBox.setAttribute("href", URL);
    urlBox.innerHTML = "I\'m feeling lucky";
    document.body.appendChild(urlBox);

    /* Function to define what happens when you click the link.
        Here, it opens it in the same tab. */
    document.getElementById("urlContainer").onclick = function() {
        // Select the div. 
        var urlBox = document.getElementById("urlContainer");
        if (urlBox["href"]) {
            /* Update the current tab to have the desired url. */
            /* First, get current tab. */
            chrome.tabs.query({'active' : true}, function() {
                /* Then, update its URL to the machine learning one. */
                chrome.tabs.update({url : urlBox["href"]});
            });
        }
    }
}

/* The main function to generate urls. */
function generate(baseURL) {
    // Add other parameters later.

    // The start URL and its parameter.
    var start = 0;
    var startURL = "start=" + start + "&";

    // The query, which will eventually be customized.
    var query = "machine+learning";
    var queryURL = "q=" + query + "&";

    // The last parameter: just to specify it's in English. Always set.
    var lang = "en";
    var langURL = "hl=" + lang;

    /* Set to the final url. */
    var scholarURL = baseURL + startURL + queryURL + langURL;

    /* Use that foundational scholarURL to scrape Google Scholar for a
        random link (later, use citations -> predict good papers). Then
        update that link to be the final one. */
    var finalURL = scrape(scholarURL);

    /* Finally, display the URL in a new HTML element. */
    display(finalURL);
}

/* Create a content loaded listener, so that the extension runs as
    soon as you load the page. */
document.addEventListener('DOMContentLoaded', function() {
    var baseURL = "http://scholar.google.com/scholar?";
    generate(baseURL);
});