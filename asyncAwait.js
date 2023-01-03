console.log('Start');

// changing userVideos we gave
function loginUser(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now we  have the data');
      resolve({ userName: name });
    }, 2000);
  });
}

function getUserVideos(name, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetails(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 2000);
  });
}
//this example goes with the same way but with async await function



async function displayUser(){
    try{


        const user = await loginUser('Mariusz', 12345);
        const videos = await getUserVideos(user) 
        const detail = await videoDetails(videos)
        console.log(detail);
    }
    catch(err) {
        console.log("We could not get the videos");
    }
}

displayUser()



console.log('End');
