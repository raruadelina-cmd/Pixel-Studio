const buttons = document.querySelectorAll(".filters button");
const photos = document.querySelectorAll(".photo");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    photos.forEach(photo => {

      photo.style.opacity = "0";
      photo.style.transform = "scale(0.9)";

      setTimeout(() => {

        if (
          filter === "toate" ||
          photo.dataset.category === filter
        ) {

          photo.style.display = "block";

          setTimeout(() => {
            photo.style.opacity = "1";
            photo.style.transform = "scale(1)";
          }, 50);

        } else {

          photo.style.display = "none";

        }

      }, 200);

    });

  });

});