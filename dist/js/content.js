function getContent() {
  var content = '<html>' + document.documentElement.innerHTML + '</html>';
  return content;
}

chrome.runtime.sendMessage(getContent(), function(response) {
});
