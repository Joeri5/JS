const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");

let paintings = [
  "./images/painting0.jpg",
  "./images/painting1.jpg",
  "./images/painting2.jpg",
  "./images/painting3.jpg",
  "./images/painting4.jpg",
  "./images/painting5.jpg",
];

let titles = [
  "De schilderijen van van Gogh",
  "De rode wijngaard",
  "De sterrennacht",
  "Sterrennacht boven de Rhone",
  "Zonnebloemen",
  "Boerderij in de Provence",
];

function changeImage(index) {
  myTitle.innerHTML = titles[index];
  myImage.src = paintings[index];
}
