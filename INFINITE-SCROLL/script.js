// insplash URL
const count = 10;
const apiKEY = '1QkNlH-dCqns8H1TLrNU6FglGz8nNtLn_KV_mxShHuc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`; 

// Get photos form Unsplash API

async function getPhotos (){
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error here
    }
}

// on load
getPhotos();
