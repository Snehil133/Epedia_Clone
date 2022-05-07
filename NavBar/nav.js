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
  


   //  ******************** Sign In *************************
  function signInMenu() {
    document.getElementById("signInId").classList.toggle("showDropdown1");
   }
     
   window.onclick = function(event) {
    if(!event.target.matches('.dropbtnSignIn')) {
       var dropS = document.getElementsByClassName("signInContent");
       var i;
         for(i = 0; i < dropS.length; i++) {
           var openDrop = dropS[i];
             if(openDrop.classList.contains("showDropdown1")) {
               openDrop.classList.remove("showDropdown");
               }
           }
       }
   } 
  