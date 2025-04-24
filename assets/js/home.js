document.addEventListener('DOMContentLoaded', function() {
    var newsCarousel = new bootstrap.Carousel(document.getElementById('newsCarousel'), {
        interval: 5000,
        wrap: true
    });
    
    // Pause carousel on hover
    const carouselElement = document.getElementById('newsCarousel');
    carouselElement.addEventListener('mouseenter', function() {
        newsCarousel.pause();
    });
    carouselElement.addEventListener('mouseleave', function() {
        newsCarousel.cycle();
    });
});