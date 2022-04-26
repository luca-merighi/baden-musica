const body = document.querySelector('body')
const sidebar = document.querySelector('#sidebar')
const sidebarLinks = document.querySelectorAll('#sidebar .sidebar-links li a')
const toggleSidebar = document.querySelector('.header .nav .toggle-sidebar-icons')
const openSidebarIcon = document.querySelector('.toggle-sidebar-icons .open-icon')
const closeSidebarIcon = document.querySelector('.toggle-sidebar-icons .close-icon')

toggleSidebar.addEventListener('click', () => {
    openSidebarIcon.classList.toggle('hide')
    closeSidebarIcon.classList.toggle('hide')
    body.classList.toggle('scroll-lock')
    sidebar.classList.toggle('hide')
})

toggleSidebar.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        openSidebarIcon.classList.toggle('hide')
        closeSidebarIcon.classList.toggle('hide')
        body.classList.toggle('scroll-lock')
        sidebar.classList.toggle('hide')
    }
})

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        openSidebarIcon.classList.toggle('hide')
        closeSidebarIcon.classList.toggle('hide')
        body.classList.toggle('scroll-lock')
        sidebar.classList.toggle('hide')
    })
})