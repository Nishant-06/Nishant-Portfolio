/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_1dsyj8u','template_zxhob5m','#contact-form','WMOZT95H1BKsC0mU9')

    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                    : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; 
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(`.nav__link[href*="${sectionId}"]`)
                .classList.add('active-link');
        } else {
            document
                .querySelector(`.nav__link[href*="${sectionId}"]`)
                .classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
    //reset: tru, //Animation repeat
})

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay: 800})
sr.reveal('.skills', {origin: 'left', delay: 1000})
sr.reveal('.about', {origin: 'right', delay: 1200})
sr.reveal('.projects__card, .services__card, .experience__card', {interval: 100})
