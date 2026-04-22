document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const toggleImageButton = document.getElementById("toggleImage");
  const changeTextButton = document.getElementById("changeTextButton");
  const paragraph = document.getElementById("myDIV");

  let toggled = false;

  
  toggleImageButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg"; 
      toggled = false;
    } else {
      gallery.src = "./assets/image2.jpg"; 
      toggled = true;
    }
  });

 
  changeTextButton.addEventListener("click", () => {
    if (toggled) {
      paragraph.textContent = "Tsukasa Tenma at your service with some new webpage designs!";
      toggled = false;
    } else {
      paragraph.textContent = "Woahh!! Brand new text?? Must be the genius work of our director, Rui Kamishiro!!!";
      toggled = true;
    }
  });
});
