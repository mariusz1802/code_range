const login = (login, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ UserLog: login });
    }, 2000);
  });
};

const video = (login, video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userVideo: video });
    }, 2000);
  });
};

const emails = (userName, email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 2000);
  });
};

const loginUser = login("mariusz", "Janovip");
const videoUser = video("mariusz", "ojciec chcesztny");
const emailUser = emails("mariusz", "mario@yahoo.pl");

loginUser.then((el) => {
  video(el.UserLog, "godfather").then((el) => {
    el.userVideo;
    emails(el.UserLog, "mario@yahoo.pl").then((el) => console.log(el));
  });
});
