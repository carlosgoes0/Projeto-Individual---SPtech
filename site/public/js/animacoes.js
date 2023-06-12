// Danos
function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

// Causas

function openCity1(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent1, tablinks;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



// Dedicatoria 


// window.addEventListener("DOMContentLoaded", function() {
//   const container = document.querySelector(".carousel-container");
//   const items = document.querySelectorAll(".carousel-item");
//   const itemCount = items.length;
//   const itemWidth = items[0].offsetWidth;
//   let currentPosition = 0;

//   // Função para mover o carrossel para a posição especificada
//   function moveTo(position) {
//     if (position < 0 || position > itemCount - 1) return;
//     container.style.transform = `translateX(-${position * itemWidth}px)`;
//     currentPosition = position;
//   }

//   // Event listeners para os botões de navegação
//   document.getElementById("carousel-prev").addEventListener("click", function() {
//     moveTo(currentPosition - 1);
//   });

//   document.getElementById("carousel-next").addEventListener("click", function() {
//     moveTo(currentPosition + 1);
//   });
// });





// Dedicatoria


// const controls = document.querySelectorAll(".control");
// let currentItem = 0;
// const items = document.querySelectorAll(".item");
// const maxItems = items.length;

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     isLeft = e.target.classList.contains("arrow-left");

//     if (isLeft) {
//       currentItem -= 1;
//     } else {
//       currentItem += 1;
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0;
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1;
//     }

//     items.forEach((item) => item.classList.remove("current-item"));

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
//       inline: "center"
//     });

//     items[currentItem].classList.add("current-item");
//   });
// });





// popUp Doacao
function aparecerPopUp() {
    var popUp = document.getElementById(`pop-up`);

    popUp.style.display = "flex"
    popUp.style.marginLeft= "30%"


    popUp.style.position = "fixed"
    popUp.style.zIndex = "500"
    escurecer.style.opacity = 0.2



}


function fecharPopUp () {
    var popUp = document.getElementById(`pop-up`);
    popUp.style.display = "none"
    escurecer.style.opacity = 1


}

function transicao() {
  
}



// popup Cadastro

function aparecerPopUpCadastro() {
  var popUp = document.getElementById(`pop-up`);

  popUp.style.display = "flex"
  popUp.style.marginLeft= "28%"


  popUp.style.position = "fixed"
  popUp.style.zIndex = "500"
  escurecer.style.opacity = 0.2



}


function fecharPopUpCadastro() {
  var popUp = document.getElementById(`pop-up`);
  popUp.style.display = "none"
  escurecer.style.opacity = 1


}

// Popup Login


function aparecerPopUpLogin() {
  var popUp = document.getElementById(`pop-upLogin`);

  popUp.style.display = "flex"
  popUp.style.marginLeft= "32%"


  popUp.style.position = "fixed"
  popUp.style.zIndex = "500"
  escurecer.style.opacity = 0.2



}


function fecharPopUpLogin() {
  var popUp = document.getElementById(`pop-upLogin`);
  popUp.style.display = "none"
  escurecer.style.opacity = 1


}




