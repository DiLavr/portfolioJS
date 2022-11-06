const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt user to select a video strime, pass video to element, then play video

async function selectMediaStream() {
  try {
    // screen capture API
    const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaSteam;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log('whoops, error here:', error);
  }
}

button.addEventListener('click', async () => {
    // disable the button
    button,disabled = true;
    // start pic in pic
    await videoElement.requestPictureInPicture();
    // reset Button
    button.desabled = false;
});

// on load
selectMediaStream();
