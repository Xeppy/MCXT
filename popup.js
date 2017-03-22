$(function() {

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
            var dataRaw = e.target.result;
                      console.log(dataRaw);
            };

reader.readAsText(f);
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);


$('#readDom').click(function(){
  var Info = {
    name:   $("#qName").val(),
    ans1:  $("#qAnswer1").val(),
    ans2: $("#qAnswer2").val()
  };
  console.log(Info);


chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {from: "popup", subject: "info", Info: Info, action: "readDom"});
 });
});

chrome.runtime.onMessage.addListener(function (msg, sender) {
  // First, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'show')) {
    console.log("Received");
    $('#status').html("Your question has been created! <br> Please refresh the page!");
  }
});

//$(this).find("input[type=text], textarea").val("");
});



/*
var span = document.createElement('span');
  span.innerHTML = ['<div>', e.target.result, escape(theFile.name), '"/>'].join('');
      document.getElementById('list').insertBefore(span, null);
      */
