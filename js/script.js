const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            /* entry.target.classList.remove('show'); */
        }
        
    });
}); 

const hiddenElements1 = document.querySelectorAll('.hidden-from-right');
const hiddenElements2 = document.querySelectorAll('.hidden-from-left');
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));