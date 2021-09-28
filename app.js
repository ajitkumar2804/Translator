var btntrans = document.querySelector(".btn-trans");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function geturl(input){
    return serverURL + "?" + "text=" + input
}
function clickHandler() {
      var inputText = txtinput.value ;
      
      fetch(geturl(inputText))
      .then(response => response.json())
      .then(json=> {
          var transtext =json.contents.translated;
          outputDiv.innerText =transtext;
      })
      .catch(errorHandler)
};

function errorHandler(error){
   alert(" Server is Down!!! Try After Sometime ")
}
btntrans.addEventListener("click", clickHandler)
