// let navigationLinks = document.querySelectorAll('ul li');

// console.log(navigationLinks);

// navigationLinks.addEventListener('mouseover', () => {
//     console.log('hey');
// })


// Hover animation effects 
// Home page

let homeLink = document.querySelector('#home-link');

homeLink.addEventListener('mouseover', () => {
    homeLink.style.animationDelay = '0s';
    homeLink.classList.replace('fadeIn','headShake');

    console.log(homeLink);
       
})

homeLink.addEventListener('mouseout', () => {
    homeLink.style.animationIterationCount = '1';
    homeLink.classList.replace('headShake','fadeIn');

    console.log(homeLink);
})

// About Page

let aboutLink = document.querySelector('#about-link');

aboutLink.addEventListener('mouseover', () => {
    aboutLink.style.animationDelay = '0s';
    aboutLink.classList.replace('fadeIn','headShake');
})

aboutLink.addEventListener('mouseout', () => {
    aboutLink.style.animationIterationCount = '1';
    aboutLink.classList.replace('headShake','fadeIn');
})

//experience page

let experienceLink = document.querySelector('#experience-link');

experienceLink.addEventListener('mouseover', () => {
    experienceLink.style.animationDelay = '0s';
    experienceLink.classList.replace('fadeIn','headShake');
})

experienceLink.addEventListener('mouseout', () => {
    experienceLink.style.animationIterationCount = '1';
    experienceLink.classList.replace('headShake','fadeIn');
})

// projects page

let projectsLink = document.querySelector('#projects-link');

projectsLink.addEventListener('mouseover', () => {
    projectsLink.style.animationDelay = '0s';
    projectsLink.classList.replace('fadeIn','headShake');
})

projectsLink.addEventListener('mouseout', () => {
    projectsLink.style.animationIterationCount = '1';
    projectsLink.classList.replace('headShake','fadeIn');
})

// Contact

let ContactLink = document.querySelector('#contact-link');

ContactLink.addEventListener('mouseover', () => {
    ContactLink.style.animationDelay = '0s';
    ContactLink.classList.replace('fadeIn','headShake');
})

ContactLink.addEventListener('mouseout', () => {
    ContactLink.style.animationIterationCount = '1';
    ContactLink.classList.replace('headShake','fadeIn');
})

