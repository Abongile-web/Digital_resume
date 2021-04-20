// let navigationLinks = document.querySelectorAll('ul li');

// console.log(navigationLinks);

// navigationLinks.addEventListener('mouseover', () => {
//     console.log('hey');
// })


// Hover animation effects 
// Home page

let homeLink = document.querySelector('#home-link');

homeLink.addEventListener('mouseover', () => {
    homeLink.classList.add('pulse');

    console.log(homeLink);
       
})

homeLink.addEventListener('mouseout', () => {
    homeLink.classList.remove('pulse');

    console.log(homeLink);
})

// About Page

let aboutLink = document.querySelector('#about-link');

aboutLink.addEventListener('mouseover', () => {
    aboutLink.classList.add('pulse');
})

aboutLink.addEventListener('mouseout', () => {
    aboutLink.classList.remove('pulse');
})

// experience page

let experienceLink = document.querySelector('#experience-link');

experienceLink.addEventListener('mouseover', () => {
    experienceLink.classList.add('pulse');
})

experienceLink.addEventListener('mouseout', () => {
    experienceLink.classList.remove('pulse');
})

// projects page

let projectsLink = document.querySelector('#projects-link');

projectsLink.addEventListener('mouseover', () => {
    projectsLink.classList.add('pulse');
})

projectsLink.addEventListener('mouseout', () => {
    projectsLink.classList.remove('pulse');
})

// Contact page

let ContactLink = document.querySelector('#contact-link');

ContactLink.addEventListener('mouseover', () => {
    ContactLink.classList.add('pulse');
})

ContactLink.addEventListener('mouseout', () => {
    ContactLink.classList.remove('pulse');
})

// Blog Page

let blogLink = document.querySelector('#blog-link');

blogLink.addEventListener('mouseover', () => {
    blogLink.classList.add('pulse');
})

blogLink.addEventListener('mouseout', () => {
    blogLink.classList.remove('pulse');
})

