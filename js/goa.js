function next(t)
{
    let elm = t.parentElement.children[1];
    let item = elm.getElementsByClassName("item");
    elm.append(item[0]);
}

function prev(t)
{
    let elm = t.parentElement.children[1];
    let item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length-1]);
}




// *************************** Sorting ****************

// function pricesort(){
//     var pricesort = document.querySelector("#sorting").value
//     if(pricesort == "l2h"){
//     productArr.sort(function(a,b){
//       return a.mrp-b.mrp;
//     })
//     displayproduct(productArr)
//     }
//     if(pricesort == "h2l"){
//       productArr.sort(function(a,b){
//         return b.mrp-a.mrp;
//       })
//       displayproduct(productArr)
//     }
//     }


// *************************** Drop Down Menu *****************

function dropdownMenu() {
  document.getElementById("dropdownId").classList.toggle("showDropdown");
 }
   
 window.onclick = function(event) {
  if(!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
       for(i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
           if(openDropdown.classList.contains("showDropdown")) {
             openDropdown.classList.remove("showDropdown");
             }
         }
     }
 } 



//  ************************************************

// var closebtns = document.getElementsByClassName("close");
// var i;

// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//     this.parentElement.style.display = 'none';
//   });
// }

// ******************************* price ******************
function price() {
  document.getElementById("dropdownId").classList.toggle("showDropdown");
 }
   
 window.onclick = function(event) {
  if(!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
       for(i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
           if(openDropdown.classList.contains("showDropdown")) {
             openDropdown.classList.remove("showDropdown");
             }
         }
     }
 } 

