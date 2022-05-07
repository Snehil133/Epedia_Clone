

function closeOption() {
  }
  
  closeOption();
  function user_data() {
    var mobile = document.getElementByClass("email").value;
    
    var password = document.getElementByClass("password").value;

    var name = document.getElementById("name").value;
    var obj = {
      mobile: mobile,
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
    var showname = document.getElementByClass("showname");
  arr = localStorage.getItem("user_cart");
  arr = JSON.parse(arr);
  showname.innerHTML = "hello " + arr[arr.length - 1].name;
    closeOption();
  }