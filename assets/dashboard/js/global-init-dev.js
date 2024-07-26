// Custom JS by Aguiton Rowell - 2024

// Profile image text
const userNameElement = document.getElementById('profileImageUserName');
const fullName = userNameElement.dataset.name; // Access data using dataset property
const initials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
document.getElementById('profileImage').innerHTML = initials;

// dynamic copyright year
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
