const express = require('express');
const app = express();
const port = 3000;

// Mock data for parrot listings
const parrots = [
    { id: 1, name: 'African Grey', price: 500, status: 'available' },
    { id: 2, name: 'Macaw', price: 800, status: 'available' },
    // Add more parrot listings as needed
];

app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in a "public" folder

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.get('/parrots', (req, res) => {
    // Send parrot listings as JSON
    res.json(parrots);
});

app.get('/upload', (req, res) => {
    res.send('Upload Parrot page'); // You can create an upload form here
});

// Add more routes as needed

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Assuming you have an array of love bird image filenames
const loveBirdImages = ['lovebird1.jpg', 'lovebird2.jpg', 'lovebird3.jpg'];

document.addEventListener('DOMContentLoaded', function () {
    // Load parrot listings
    loadParrotListings();

    // Load love bird images
    loadLoveBirdImages();
});

function loadParrotListings() {
    // You can make an AJAX request to the server to get parrot listings and then update the HTML
    // For simplicity, let's assume the parrots variable is accessible here

    const parrotListingsContainer = document.getElementById('parrot-listings');

    parrots.forEach(parrot => {
        const parrotDiv = document.createElement('div');
        parrotDiv.innerHTML = `<p>${parrot.name} - $${parrot.price}</p>`;
        parrotListingsContainer.appendChild(parrotDiv);
    });
}

function loadLoveBirdImages() {
    const loveBirdsGalleryContainer = document.getElementById('love-birds-gallery');

    loveBirdImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.alt = 'Love Bird';
        imgElement.classList.add('love-bird-image');
        loveBirdsGalleryContainer.appendChild(imgElement);
    });
}
