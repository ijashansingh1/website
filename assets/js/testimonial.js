const testimonials = document.querySelectorAll('.testimonial');
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

function scrollNext() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function scrollPrev() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

nextBtn.addEventListener('click', scrollNext);
prevBtn.addEventListener('click', scrollPrev);

// Auto-scroll to the left
function autoScroll() {
    scrollNext();
    setTimeout(autoScroll, 5000); // Change testimonial every 5 seconds
}

autoScroll();

// Show the first testimonial by default
showTestimonial(currentTestimonialIndex);
