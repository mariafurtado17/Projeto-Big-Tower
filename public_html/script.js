 let indiceSlide = 0;
    mostrarSlide(indiceSlide);

    function mudarSlide(n) {
        mostrarSlide(indiceSlide += n);
    }

    function mostrarSlide(n) {
        let slides = document.getElementsByClassName("slide");
        if (n >= slides.length) { indiceSlide = 0 }
        if (n < 0) { indiceSlide = slides.length - 1 }
        document.getElementById("slides").style.transform = `translateX(${-indiceSlide * 100}%)`;
    }
    
   
