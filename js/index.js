function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector('header').style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector("header").style.marginLeft= "0";
  }

  //   main header starts 
  function openPage(page) {
    var i;
    var x = document.getElementsByClassName("call");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(page).style.display = "block";  

    // console.log(document.getElementById(page).style.display = "block");
  }
  //   main header ends 


//   Yetkazib berish shartlari  statistika  starts

var xValues = ["EYW", "DPI", "", "", "",""];
var yValues = [55, 49, 44, 24, 15,20];
var barColors = ["red", "green","blue","orange","brown","brown"];

new Chart("myShartlar_asosida", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Доставка товара по всей стране 2022"
    }
  }
});

//   Yetkazib berish shartlari  statistika  starts

//  Davlatlar Statistikasi 
var xValues = ["Китай", "Франция", "Испания", "Узбекистан", "США", "Аргентина"];
var yValues = [55, 49, 44, 34, 45, 40];
var barColors = ["red", "green","blue","orange","brown", "red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Государственная статистика 2022"
    }
  }
});

//  Davlatlar Statistikasi 

