var fieldFoundData = "url('data:image/gif;base64,R0lGODlhDQAOAIABAMzMzAAAACH5BAEAAAEALAAAAAANAA4AAAIchI8XyRDb1IvmzWgvyxrxXn2QJHqidlphurBWAQA7')";
var fieldPopData = "url('data:image/gif;base64,R0lGODlhDQAOAJEAAAjOCPn%2B%2Bd343f%2F%2F%2FyH5BAEAAAMALAAAAAANAA4AAAIlhI83CRKhFoKAjouE0eBi81CdJ3ERWSWkx6ws4r5GLNOvzeJeAQA7')";

function processPasswordFields(pass) {
  var forms,i,form,n;
  forms = document.forms;
  for(n=0; n<forms.length; ++n) {
    form = forms[n];
    for (i=0; i<form.length; ++i) {
      if (form[i].type.toLowerCase() == 'password') {
        if(pass==null) {
					form[i].style.backgroundImage = fieldFoundData;
        } else {
					form[i].style.backgroundImage = fieldPopData;
          form[i].value = pass;
        }
        form[i].style.backgroundPosition='top right';
        form[i].style.backgroundRepeat='no-repeat';
      }
    }
  }
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  processPasswordFields(request.value);
  sendResponse({});
});

processPasswordFields(null);

