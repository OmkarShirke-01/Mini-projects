const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const today = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  header.innerHTML =
    '<img src="https://i.pinimg.com/1200x/ec/41/74/ec41744b982842f925c7d745852c9ec7.jpg" alt="" />';
  title.innerHTML = "Heading";
  excerpt.innerHTML =
    "Content goes here...";
  profile_img.innerHTML =
    '<img src="https://i.pinimg.com/1200x/61/e3/9e/61e39e00865a39454ba0ef6051d42bb8.jpg" alt="" />';
  name.innerHTML = "Agent C";
  date.innerHTML = `${
    monthNames[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;
  animated_bgs.forEach((background) =>
    background.classList.remove("animated-bg")
  );
  animated_bg_texts.forEach((background) =>
    background.classList.remove("animated-bg-text")
  );
};

setTimeout(getData, 2500);