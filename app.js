document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.galeria-imagenes img');
    var lightbox = document.getElementById('lightbox');
    var closeBtn = document.querySelector('.close');

    // Abrir el lightbox
    images.forEach(function(img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    // Cerrar el lightbox
    closeBtn.onclick = function() {
        lightbox.style.display = 'none';
    };

    // Clic fuera para cerrar
    window.onclick = function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = 'none';
        }
    };
});
