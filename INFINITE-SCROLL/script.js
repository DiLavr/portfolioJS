const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash URL
const count = 10;
const apiKEY = '1QkNlH-dCqns8H1TLrNU6FglGz8nNtLn_KV_mxShHuc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`; 

// Create elments for Links & Photos, add to DOM
function displayPhotos() {
    // run function for each oject in the Array
    photosArray.forEach((photo) => {
// Creat ancor to link to unsplash
const item = document.createElement('a');
item.setAttribute ('href', photo.links.html);
// open link in the new page
item.setAttribute('target', '_blank');
// Creat <img> for photo
const img = document.createElement('a');
img.setAttribute('scr', photo.urls.regular);
img.setAttribute('alt', photo.alt_description);
img.setAttribute('title', photo.alt_description);
// put <img> inside <a>, and then put inside out img container
item.appendChild(img);
imageContainer.appendChild(item);
    });
}

// Get photos form Unsplash API

async function getPhotos (){
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error here
    }
}

// on load
getPhotos();
