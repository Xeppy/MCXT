// Currently loads for Ford FOE on GB Server
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
  var qText;
  var qAns1;
  var qAns2;
/*if ((request.from === 'popup') && (request.subject === 'info')) {
  qText = request.Info.name;
} */

if(request.action == "readDom"){

    console.log("Alex said it worked");
    qText = request.Info.name;
    qAns1 = request.Info.ans1;
    qAns2 = request.Info.ans2;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bonfireemea.allegiancetech.com/design/NewQuestion/41/radiogroup/false/19,19', true);
    xhr.onload = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status == 0) {
        var  RequestID = this.responseText;
        var  parser1 = new DOMParser();
        var  xmlparse = parser1.parseFromString(RequestID,"text/html");
        var editdoc = xmlparse.querySelector('input[name=__RequestVerificationToken]').value;

      //  var qText = "This is a sample Question";
        var qType = "radiogroup";
        var qReq = "true";
        var qTag = "";
      //  var qAns1 = "First Answer";
        var qAns1W = "10";
    //    var qAns2 = "Second Answer";
        var qAns2W = "5";

var text = "__RequestVerificationToken=" + editdoc + "&PageDesignId=41&QuestionText=%253Cdiv%253E" + qText + "%253C%252Fdiv%253E&QuestionHelpText=&AnswerImages=%5B%5D&FilterData=&LanguageSelector=false&CurrentLanguageId=19&DefaultLanguageId=19&DefaultLanguageName=&AllowUpdate=None&SurveyfilterItemValuesToDelete=&AllowOtherAnswer=False&InsertAfter=-1&ObjectLayout=Simple&InitialDisplayType=" + qType + "&CurrentDisplayType=" + qType + "&displayType=" + qType + "&OrientationSelector=V&required=false&Answers%5B0%5D.AnswerDesignId=0&Answers%5B0%5D.AnswerImageGuid=&Answers%5B0%5D.AnswerDesignObjectId=0&Answers%5B0%5D.AnswerDisplayLogic=&Answers%5B0%5D.AnswerCopiedFromAnswerId=0&Answers%5B0%5D.AnswerText=" + qAns1 + "&Answers%5B0%5D.AnswerWeight=" + qAns1W + "&Answers%5B0%5D.Exclusive=false&Answers%5B0%5D.Anchor=false&Answers%5B1%5D.AnswerDesignId=0&Answers%5B1%5D.AnswerImageGuid=&Answers%5B1%5D.AnswerDesignObjectId=0&Answers%5B1%5D.AnswerDisplayLogic=&Answers%5B1%5D.AnswerCopiedFromAnswerId=0&Answers%5B1%5D.AnswerText=" + qAns2 + "&Answers%5B1%5D.AnswerWeight=" + qAns2W + "&Answers%5B1%5D.Exclusive=false&Answers%5B1%5D.Anchor=false&TextAsCategorical=false&MultipleCategories=false&IsHierarchyFilter=false&rdoAction=Show&chkActionAutoAnswer=false&AutoAnswer=1&SmartProbeActive=false&SmartProbeSaidTooLittleNumberOfWords=10&SmartProbeSaidTooLittleMessage=Please%2520tell%2520us%2520a%2520little%2520more.&SmartProbeNotSpecificNumberOfWords=100&SmartProbeNotSpecificKeywords=&SmartProbeNotSpecificMessage=Thank%2520you.%2520Could%2520you%2520elaborate%2520a%2520little%2520on%2520your%2520feelings%2520about%2520%255Bkeywords%255D%2520so%2520we%2520may%2520take%2520better%2520action%253F&QuestionTag=" + qTag + "&ReportAlias=&defaultAnswerText=&numericMinValue=&numericMaxValue=&maxLengthText=255&validationType=None&validationRegEx=&validationMessage=&defaultAnswerMemo=&maxLengthMemo=4000&DisplayCharacterLimit=false&sort=0&minSelected=0&maxSelected=0&answerColumns=1&PercentWidth=90&TextMemoWidth=400&MemoHeight=100&CssClass=&InsertBeforeSelectedItems=false&InsertAfterSelectedItems=false&SelectedObjectIds=";

        var xhrp = new XMLHttpRequest();
        xhrp.open("POST", 'https://bonfireemea.allegiancetech.com/design/NewQuestion/41/radiogroup/false/19,19', true);
        xhrp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhrp.send(text);
        xhrp.onreadystatechange = function() {
            if (xhrp.readyState === 4) {
                if (xhrp.status === 200 || xhrp.status == 0) {
                    console.log("success");
                }
            }
        };
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
      }
    };
    xhr.send();

    chrome.runtime.sendMessage({
      from:    'content',
      subject: 'show'
    });

  }
});


// &Answers%5B2%5D.AnswerDesignId=0&Answers%5B2%5D.AnswerImageGuid=&Answers%5B2%5D.AnswerDesignObjectId=0&Answers%5B2%5D.AnswerDisplayLogic=&Answers%5B2%5D.AnswerCopiedFromAnswerId=0&Answers%5B2%5D.AnswerText=3&Answers%5B2%5D.AnswerWeight=3&Answers%5B2%5D.Exclusive=false&Answers%5B2%5D.Anchor=false

/*
    var port = chrome.runtime.connect({name:"mycontentscript"});
    port.onMessage.addListener(function(message,sender){
      if(message.greeting === "go"){

        alert("It said " + message.greeting);

        chrome.storage.local.clear(function() {
            var error = chrome.runtime.lastError;
            if (error) {
                console.error(error);
            }
        });

      chrome.storage.local.get('value', function(result){
        value = result.value;
            alert(result.value);
      });
  }
}); */
