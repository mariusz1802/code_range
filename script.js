console.log('Start');

//instead of giving return I gave callback function
//thanks callback function we can handle asynchronious function

function loginUser(name, password, callback) {
  setTimeout(() => {
    console.log('Now we  have the data');
    callback({ userName: name });
  }, 2000);
}

function getUserVideos(name, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback('title of the video');
  }, 2000);
}

//with this approach we get callback hell(werid structur of callbacks)
const newUser = loginUser('TomaszChic', 12345, (user) => {
  console.log(user.userName);
  getUserVideos(user.userName, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
        console.log(title);
    })
  });
});

console.log('End');
