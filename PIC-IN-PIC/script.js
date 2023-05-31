
/**
 * Retrieves the video element and button element from the DOM.
 * @returns {Object} An object containing the video element and button element.
 */
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
/**
 * Asynchronously selects a media stream from the user's display and sets it as the source
 * for the video element.
 * @returns None
 */
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

/**
 * Adds an event listener to the button that listens for a click event and then
 * executes an asynchronous function.
 * @param {function} asyncFunction - the asynchronous function to execute when the button is clicked
 * @returns None
 */
button.addEventListener('click', async () => { 
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load of the page the promt to select the media sourse
selectMediaStream();

