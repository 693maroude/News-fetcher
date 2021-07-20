let apiKey = "16ac336d9f83448583f2e7142475863b";
let url =
  "https://newsapi.org/v2/top-headlines?category=health&apiKey=" + apiKey;
let Init = {
  method: "Get",
  headers: {
    //not allowed
  },
};

let request = new Request(url, Init);

displayNews = (articles) => {
  console.log("displayNews called");

  return new Promise((resolve, reject) => {
    try {
      let news = "";
      articles.forEach((article) => {
        news += `<div class="news-container">
        <div class="source">Source: ${article.source.name}</div>
        <div class="date">${article.publishedAt.slice(0, 10)}</div>
        <div class="title">${article.title}</div>
        <div class="description">${article.description}</div>       
        <a href="${article.url}" target="_blank">Read more</a>
      </div>`;
      });
      document.getElementsByClassName("news")[0].innerHTML = news;

      resolve("News Displayed Sucessfully");
    } catch (err) {
      reject(err);
    }
  });
};

(fetchData = () => {
  console.log("fetchData() called");

  fetch(request)
    .then((response) => response.json())
    .then((responseObj) => {
      console.log("Parsed Response Received");

      return displayNews(responseObj.articles);
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
})();
