function changeHeaderWhenScrolling() {
    const header = document.querySelector('.header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('shadow')
    } else {
        header.classList.remove('shadow')
    }
}

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top-button')
    
    if(window.scrollY >= 800) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateLinkAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if(checkpointStart && checkpointEnd) {
            const link = document.querySelector('.links li a[href*=' + sectionId + ']')
            link.classList.add('active')
        } else {
            const link = document.querySelector('.links li a[href*=' + sectionId + ']')
            link.classList.remove('active')
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScrolling()
    backToTop()
    activateLinkAtCurrentSection()
})