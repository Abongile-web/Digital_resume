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

    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})

//Experience link
document.querySelector('#experience-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.experience-page').style.display = 'block';

    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})

//Projects link
document.querySelector('#projects-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.projects-page').style.display = 'block';

    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})

//Contact link
document.querySelector('#contact-link').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';

    document.querySelector('.contact-page').style.display = 'block';

    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})

//Home link
document.querySelector('#home-link').addEventListener('click', () => {
    document.querySelector('.contact-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';

    document.querySelector('.landing-page').style.display = 'block';

    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})



//See my work button 
document.querySelector('.landing-page button').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';

    document.querySelector('.projects-page').style.display = 'block';
})


//toggle navigation in mobile view

document.querySelector('.menu i').addEventListener('click', () => {
    document.querySelector('.dashboard').classList.toggle('dashboard-mobile');
})

document.querySelector('div.menu img').addEventListener('click', () => {
    document.querySelector('.contact-page').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
    document.querySelector('.experience-page').style.display = 'none';
    document.querySelector('.projects-page').style.display = 'none';

    document.querySelector('.landing-page').style.display = 'block';

    menu = false;
    dashBoard.style.display = 'none';
})

  //Contact form 
  $(document).ready(function () {
    $('.submit').click(function (event) {
  
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()
  
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div>Email is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Email is not valid</div>')
        }
  
        if(subject.length >= 2) {
            status.append('<div>Subject is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Subject is not valid</div>')
        }
  
        if(message.length >= 10) {
            status.append('<div>Message is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Message is not valid</div>')
        }
    })
  })