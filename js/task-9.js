const popularMovies = [
  {
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    country: "USA",
  },
  {
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    country: "South Korea",
  },
  {
    title: "Joker",
    year: 2019,
    rating: 8.5,
    country: "USA",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    country: "USA",
  },
  {
    title: "The Irishman",
    year: 2019,
    rating: 7.9,
    country: "USA",
  },
  {
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    country: "USA",
  },
  {
    title: "Black Panther",
    year: 2018,
    rating: 7.3,
    country: "USA",
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    country: "Australia",
  },
];
const table = document.querySelector(".table");
const form = document.querySelector(".form");

const tableHead = `<tr>${Object.keys(popularMovies[0])
  .map((key) => `<th>${key}</th>`)
  .join("")}</tr>`;

console.log(tableHead);

const tableBody = popularMovies
  .map((movie) => {
    let tableRow = "<tr>";
    for (const key in movie) {
      tableRow += `<td>${movie[key]}</td>`;
    }
    tableRow += "</tr>";
    return tableRow;
  })
  .join("");

let tableData = tableHead + tableBody;

table.insertAdjacentHTML("beforeend", tableData);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const addRow = `<tr>
  <td>${form.elements.title.value}</td>
  <td>${form.elements.year.value}</td>
  <td>${form.elements.rating.value}</td>
  <td>${form.elements.country.value}</td>
  </tr>`;
  console.log(addRow);
  table.insertAdjacentHTML("beforeend", addRow);
  form.reset();
}
