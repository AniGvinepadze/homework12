const url = " https://api.quotable.io/random  ";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let content = data.content;
    let author = data.authorSlug;
    let content1 = document.querySelector("#quote");
    content1.textContent = content;
    let author1 = document.querySelector("#author");
    author1.textContent = author;
  });