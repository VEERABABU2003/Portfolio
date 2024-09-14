// Example of dynamically adding projects
const projects = [
    { title: 'Project 1', description: 'Description for project 1' },
    { title: 'Project 2', description: 'Description for project 2' },
    { title: 'Project 3', description: 'Description for project 3' }
];

const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectGrid.appendChild(projectDiv);
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // Add form handling logic here
});
