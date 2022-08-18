function openPage(page) {
    var i;
    var x = document.getElementsByClassName("call");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(page).style.display = "block";  

    // console.log(document.getElementById(page).style.display = "block");
  }
