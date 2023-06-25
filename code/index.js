import req from "./method.js";

req("https://jsonplaceholder.typicode.com/comments", show);

function show(data) {
  if (!Array.isArray(data)) return;

  const page = document.querySelector(".page");
  

  data.forEach((obj, i) => {
    const pattern = `
         <div class="comments">
         <p>${obj.id}</p>
         <h1>${obj.name}</h1>
         <p>${obj.email}</p>
         <p>${obj.body}</p>
         </div>
         `;

    if (i >= 0 && i < 100) {
      page.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 100 && i < 200) {
      page.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 200 && i < 300) {
      page.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 300 && i < 400) {
      page.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 400 && i < 500) {
      page.insertAdjacentHTML("beforeend", pattern);
    }
  });
}
