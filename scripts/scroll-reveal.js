const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .section, #home .section,
    #about .swiper-container, #about .text,
    #services .text, #services .cards-container,
    #location #mapid, #location .text,
    #contacts .text, #contacts .social-media-links
    
    `, {interval: 100}
)