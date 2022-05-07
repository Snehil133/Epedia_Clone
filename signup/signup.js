

function closeOption() {}

closeOption();
function user_data() {
 
  var mobile = document.getElementByClass("email").value;
  
  var name = document. getElementByClass("firstname").value;

  var name = document. getElementByClass("surname").value;
  
  
  var name = document. getElementByClass("password").value;
  var obj = {
    password: password,
    name: name,
  };
  
  
  var arr;
  arr = localStorage.getItem("user_cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = localStorage.getItem("user_cart");
    arr = JSON.parse(arr);
  }
  arr.push(obj);
  localStorage.setItem("user_cart", JSON.stringify(arr));
  // signIn.style.display = "none";
  // location.reload();
  closeOption();
}