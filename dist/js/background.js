chrome.browserAction.onClicked.addListener(function(tab) {
  var newURL = "http://127.0.0.1:8080/search";
  chrome.tabs.create({ url: newURL });
});
