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






// Navigation functionality 
//About link

document.querySelector('#about-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.about-page').style.display = 'flex';
})

//Experience link
document.querySelector('#experience-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.experience-page').style.display = 'block';
})

//Projects link
document.querySelector('#projects-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.projects-page').style.display = 'block';
})

//Contact link
document.querySelector('#contact-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';

    document.querySelector('.contact-page').style.display = 'block';
})

//Home link
document.querySelector('#home-link').addEventListener('click', () => {
    document.querySelector('.contact-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';

    document.querySelector('.landing-page').style.display = 'block';
})



//See my work button 
document.querySelector('.landing-page button').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.projects-page').style.display = 'block';
})