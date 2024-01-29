// Smooth Scroll Behaviour
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'selected' class from all links
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('selected');
        });

        // Add 'selected' class to the clicked link
        this.classList.add('selected');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Calculate the adjusted position for small screens
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = window.innerWidth <= 600 ? -30 : 0;

        // Scroll to the adjusted position
        window.scrollTo({
            top: targetElement.offsetTop + offset,
            behavior: 'smooth'
        });
    });
});


// Projects
const projects = [
    
    { name: 'Refugee Medicine Management',
        description: 'Medical facilities in refugee camps using video calls with specialists(doctors) and big data transfer using kafka',
        link: 'https://github.com/hrshpreet/Saarthi-Camps' ,
        image: './assets/saarthi.png'},
    { name: 'Vriddhi: Kids Development Navigator', 
        description: 'Description for Project 2',
        link: 'https://youtu.be/JKMVmQKKfUg' ,
        image: './assets/vriddhi.png'},
    
];
const projectsSection = document.getElementById('project-list');

// Use map to create HTML elements for each project
const projectElements = projects.map(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectImage = document.createElement('img'); 
    projectImage.src = project.image;
    projectImage.alt = project.name;

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.name;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'Learn more';

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    projectDiv.appendChild(projectImage);
    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);
    projectInfo.appendChild(projectLink);
    projectDiv.appendChild(projectInfo);

    return projectDiv;
});

projectElements.forEach(element => {
    projectsSection.appendChild(element);
});


// Skills
const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript',
    'React',
    'Responsive Design', 'CSS Frameworks (e.g., Bootstrap)',
    'Version Control (e.g., Git)', 'Web Performance Optimization'
];

const skillsSection = document.getElementById('skills-section');

// Use map to create HTML elements for each skill
const skillBricks = frontendSkills.map(skill => {
    const skillBrick = document.createElement('div');
    skillBrick.classList.add('skill-brick');
    skillBrick.textContent = skill;
    return skillBrick;
});

skillBricks.forEach(brick => {
    skillsSection.appendChild(brick);
});



// Email
(function() {
    // https://dashboard.emailjs.com/admin/account
    // emailjs.init('YOUR_PUBLIC_KEY');
    emailjs.init('pXgratgGsfzazuJup');
})();
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // generate a five-digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        // these IDs from the previous steps
        var templateParams = {
            to_name: 'Recipient Name',
            from_name: 'Sender Name',
            message: 'This is the content of the message.',
            // other template variables...
        };
        
        emailjs.sendForm('service_6ti87oq', 'template_tb3iy7n', '#contact-form')
            .then(function (responsew) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};
