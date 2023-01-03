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

function getUserVideos(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 2000);
  });
}

loginUser('Mariusz', 12345).then((user) =>
  getUserVideos(user.email)
    .then((videos) => videoDetails(videos[0]))
    .then((detail) => console.log(detail))
);




console.log('End');
