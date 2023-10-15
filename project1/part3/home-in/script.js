const slide = () => {
    const slideshows = document.querySelectorAll(".slideshow");
  
    slideshows.forEach(slideshow => {
      const currentImage = slideshow.querySelector(":not(.hidden)");
      currentImage.classList.add("hidden");
  
      let nextImage = currentImage.nextElementSibling;
  
      if (nextImage == null) {
        nextImage = slideshow.querySelector(":first-child");
      }
  
      nextImage.classList.remove("hidden");
    });
  };
  
  window.onload = () => {
    setInterval(slide, 1000);
  };
  