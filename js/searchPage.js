import { searchInput, handleSearch, classicSerch } from "./search.js";

// import { generateMovieCards } from "./movie.js";
// import { handleSearch } from "./search.js";

//generateMovieCards();

// 헤더의 search-input으로 검색어를 넘겨 받음

const searchInput = document.querySelector("#search-input");

const searchForm = document.getElementById("serch-form");

// 헤더의 form 사용
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});