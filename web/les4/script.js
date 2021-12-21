const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
  {
    titel: "seizoenen",
    image: "images/seasons.jpg",
    backGround: "gray",
  },
  {
    titel: "lente",
    image: "images/spring.jpg",
    backGround: "green",
  },
  {
    titel: "zomer",
    image: "images/summer.jpg",
    backGround: "green",
  },
  {
    titel: "herfst",
    image: "images/autumn.jpg",
    backGround: "brown",
  },
  {
    titel: "winter",
    image: "images/winter.jpg",
    backGround: "white",
  },
];

function show(index) {
  myTitle.innerHTML = seizoenen[index].titel;
  myImage.src = seizoenen[index].image;
  document.body.style.backgroundColor = seizoenen[index].backGround;
}
