let apiKey = "16ac336d9f83448583f2e7142475863b";
let url = "https://newsapi.org/v2/top-headlines?q=corona&apiKey=" + apiKey;
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
        news += `<div class="news container">
        <div class="source">${article.source.name}</div>
        <div class="author">${article.author}</div>
        <div class="title">${article.title}</div>
        <div class="description">${article.description}</div>
        <figure class="thumbnail">
          <img src="${article.urlToImage}" 
          onerror="
            this.onerror=null;
            this.src='https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg';" 
          />
        </figure>
        <div class="date">${article.publishedAt}</div>
        <div class="content">${article.content}</div>
      </div>`;
      });
      document.getElementsByClassName("news")[0].innerHTML = news;

      resolve("News Displayed Sucessfully");
    } catch (err) {
      reject(err);
    }
  });
};

fetchData = () => {
  console.log("fetchData() called");

  fetch(request)
    .then((response) => response.json())
    .then((responseObj) => {
      console.log("Parsed Response Received");

      return displayNews(responseObj.articles);
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
};
