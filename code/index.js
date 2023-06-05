import req from "./method.js";

req("https://jsonplaceholder.typicode.com/comments", show);

function show(data) {
  if (!Array.isArray(data)) return;

  const frame2 = document.querySelector("#page-2");
  const frame3 = document.querySelector("#page-3");
  const frame4 = document.querySelector("#page-4");
  const frame5 = document.querySelector("#page-5");

  const frameDoc2 = frame2.contentWindow.document;
  const container2 = frameDoc2.querySelector("#container-two");

  const frameDoc3 = frame3.contentWindow.document;
  const container3 = frameDoc3.querySelector("#container-three");

  const frameDoc4 = frame4.contentWindow.document;
  const container4 = frameDoc4.querySelector("#container-four");

  const frameDoc5 = frame5.contentWindow.document;
  const container5 = frameDoc5.querySelector("#container-five");

  const container1 = document.querySelector("#container-one");

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
      container1.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 100 && i < 200) {
      container2.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 200 && i < 300) {
      container3.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 300 && i < 400) {
      container4.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 400 && i < 500) {
      container5.insertAdjacentHTML("beforeend", pattern);
    }
  });
}
