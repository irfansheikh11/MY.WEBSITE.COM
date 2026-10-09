
// 1. FORM SUBMIT PE ALERT
const form = document.querySelector('.form');

if(form){
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // page reload nahi hoga
        alert("Thank you! Your message has been submitted. I will contact you soon 😊");
        form.reset(); // form khali ho jayega
    });
}

// 2. NAVBAR SMOOTH SCROLL + SCROLL ANIMATION
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if(section){
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. BONUS: SCROLL KARTE HI SECTION FADE IN
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(30px)';
    sec.style.transition = '1s ease';
    observer.observe(sec);
});
