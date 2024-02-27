const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const makeHtml = images
  .map((img) => `<img src="${img.url}" alt="${img.alt}">`)
  .join("");

gallery.insertAdjacentHTML("beforeend", makeHtml);

let affairs = [
  {
    date: "2019-12-29",
    event: "name1",
  },
  {
    date: "2019-12-31",
    event: "name2",
  },
  {
    date: "2019-12-29",
    event: "name3",
  },
  {
    date: "2019-12-30",
    event: "name4",
  },
  {
    date: "2019-12-29",
    event: "name5",
  },
  {
    date: "2019-12-31",
    event: "name6",
  },
  {
    date: "2019-12-29",
    event: "name7",
  },
  {
    date: "2019-12-30",
    event: "name8",
  },
  {
    date: "2019-12-30",
    event: "name9",
  },
];

const arr = affairs
  .map((item) => item.date)
  .filter((item, i, array) => i === array.indexOf(item));

console.log(arr);
