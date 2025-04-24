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

// event js 

document.addEventListener('DOMContentLoaded', function() {
    // Notices scrolling functionality
    const noticesContainer = document.getElementById('noticesContainer');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    // Scroll amount for each click
    const scrollAmount = 100;
    
    nextBtn.addEventListener('click', function() {
        noticesContainer.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', function() {
        noticesContainer.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Hover effects for event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});