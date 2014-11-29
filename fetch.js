// The key url:
// http://scholar.google.com/scholar?start=00&q=machine+learning&hl=en
// (see the parameters)

/* Fetch a url to a machine learning paper from Google Scholar. */
function fetch() {
    
}

/* Display a URL in the box. When you click it, it opens up the url in
    the same tab. */
function display(URL) {
    var urlBox = document.createElement('a');
    urlBox.setAttribute("id", "linkie")
    urlBox.setAttribute("href", URL);
    urlBox.innerHTML = "I\'m feeling lucky";
    document.body.appendChild(urlBox);

    /* Function to define what happens when you click the link.
        Here, it opens it in the same tab. Note how a callback function
        is needed for this to work. */
    document.getElementById("linkie").onclick = function() {
        // Select the div. 
        var urlBox = document.getElementById("linkie");
        if (urlBox["href"]) {
            openURL(urlBox["href"]);
        }
    }
}

/* A helper function to open a url in the same tab. */

function openURL(url) {
    if (url) {
        chrome.tabs.create({url : url});
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