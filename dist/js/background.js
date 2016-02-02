var apiEndpoint = "http://127.0.0.1:8080";
var defaultCollection = "default";

chrome.browserAction.onClicked.addListener(function(tab) {
  var newURL = apiEndpoint + "/search";
  chrome.tabs.create({ url: newURL });
});

// TODO: for when adding typeahead to search
// chrome.omnibox.onInputChanged.addListener(
//   function(text, suggest) {
//     console.log('inputChanged: ' + text);
//     suggest([
//       {content: text + " one", description: "the first one"},
//       {content: text + " number two", description: "the second entry"}
//     ]);
//   });

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var newURL = apiEndpoint + "/search?q=" + encodeURIComponent(text);
    chrome.tabs.update({ url: newURL });
});

function indexPage(url, content, callback) {
  var postURL = apiEndpoint + "/collections/" + defaultCollection + "/" + encodeURIComponent(url);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", postURL, true);
  try {
    xhr.send(content);
  } catch (e) {
    console.error("XHR failed for " + postURL + ", " + e);
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  indexPage(sender.tab.url, request, callback);
});
