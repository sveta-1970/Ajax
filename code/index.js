import req from "./method.js";
req("https://jsonplaceholder.typicode.com/comments", show);

function show(data) {
  if (!Array.isArray(data)) return;
  const page1 = document.querySelector("#page1");
  const page2 = document.querySelector("#page2");
  const page3 = document.querySelector("#page3");
  const page4 = document.querySelector("#page4");
  const page5 = document.querySelector("#page5");

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
      page1.insertAdjacentHTML("beforeend", pattern);
    }
    /*
    else if (i >= 100 && i < 200) {
      page2.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 200 && i < 300) {
      page3.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 300 && i < 400) {
      page4.insertAdjacentHTML("beforeend", pattern);
    } else if (i >= 400 && i < 500) {
      page5.insertAdjacentHTML("beforeend", pattern);
    }
    */

    let page_number = document.querySelector("pagination_button");
    page_number.addEventListener("click", (e) => {
      switch (e.target.id) {
        case 1:
          if (i >= 0 && i < 100) {
            page1.insertAdjacentHTML("beforeend", pattern);
          }
          break;
        case 2:
          if (i >= 100 && i < 200) {
            page2.insertAdjacentHTML("beforeend", pattern);
          }
          break;
        case 3:
          if (i >= 200 && i < 300) {
            page3.insertAdjacentHTML("beforeend", pattern);
          }
          break;
        case 4:
          if (i >= 300 && i < 400) {
            page4.insertAdjacentHTML("beforeend", pattern);
          }
          break;
        case 5:
          if (i >= 400 && i < 500) {
            page5.insertAdjacentHTML("beforeend", pattern);
          }
          break;
      }
    });
  });
}
