// The key url:
// http://scholar.google.com/scholar?start=00&q=machine+learning&hl=en
// (see the parameters)

/* Fetch a url to a machine learning paper from Google Scholar. */
function fetch() {
    
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
    var finalURL = baseURL + startURL + queryURL + langURL;

    /* Fetch a url, and display it in the HTML box. */
    /* DO THIS LATER. */

    /* Finally, display the URL in a new HTML element. */
    display(finalURL);
}

/* Create a content loaded listener, so that the extension runs as
    soon as you load the page. */
document.addEventListener('DOMContentLoaded', function() {
    var baseURL = "http://scholar.google.com/scholar?";
    generate(baseURL);
});