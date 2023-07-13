function validateform(){
  var name=document.Log in.first-name.value;
  var name=document.Log in.last-name.value;
  var password=document.Log in.password.value;

  if (first-name==null||first-name==""){
    alert("Name can't be blank");
    return false;
  }
  else if(last-name==null|| last-name==""){
    alert("Name can't be blank");
    return false;
  }

  else if(password.length<8){
    alert("Password must be at least 8 characters long.");
    return false;
  }
}

function matchpass(){
  var firstpassword=document.f1.password.value;
  var secondpassword=document.f1.password2.value;

  if (firstpassword==secondpassword){
    return true;
  }

  else{
    alert("password must be same!");
    return false;
  }
}

function validate(){
  var x=document.Log in.email.value;
  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
  {
    alert("Please enter a valid e-mail address \n atposition:"+atposition+"\n dotposition:"+dotposition);
    return false;
  }
}
