const buttons = document.querySelectorAll(".filters button");
const photos = document.querySelectorAll(".photo");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    photos.forEach(photo => {
      if (filter === "toate" || photo.dataset.category === filter) {
        photo.style.display = "block";
      } else {
        photo.style.display = "none";
        
      }
    });
  });
  
});
