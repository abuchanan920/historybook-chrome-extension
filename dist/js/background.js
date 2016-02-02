var apiEndpoint = "http://127.0.0.1:8080";

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
    //chrome.tabs.create({ url: newURL });
  });
