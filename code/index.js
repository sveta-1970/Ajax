import req from "./method.js";

req("https://jsonplaceholder.typicode.com/comments", show);

function show(data) {
  if (!Array.isArray(data)) return;
  const page = document.querySelector(".page");
  let page_number = 0;
  page_number = document.querySelector(".pagination");
  const links = document.querySelectorAll(".pagination_button"),
    active_link_1 = document.querySelector("#page_one"),
    active_link_2 = document.querySelector("#page_two"),
    active_link_3 = document.querySelector("#page_three"),
    active_link_4 = document.querySelector("#page_four"),
    active_link_5 = document.querySelector("#page_five");

  data.forEach((obj, i) => {
    const pattern = `
          <div class="comments">
          <p>${obj.id}</p>
          <h1>${obj.name}</h1>
          <p>${obj.email}</p>
          <p>${obj.body}</p>
          </div>
          `;
    //first page
    if (i >= 0 && i < 100) {
      page.insertAdjacentHTML("beforeend", pattern);
    }
  });

  page_number.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "1":
        page.innerHTML = ""; //clear previously shown objects
        links.forEach((link) => {
          link.classList.remove("active");
        });
        active_link_1.classList.add("active");
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
          }
        });
        break;
      case "2":
        page.innerHTML = "";
        links.forEach((link) => {
          link.classList.remove("active");
        });
        active_link_2.classList.add("active");
        data.forEach((obj, i) => {
          const pattern = `
         <div class="comments">
         <p>${obj.id}</p>
         <h1>${obj.name}</h1>
         <p>${obj.email}</p>
         <p>${obj.body}</p>
         </div>
         `;
          if (i >= 100 && i < 200) {
            page.insertAdjacentHTML("beforeend", pattern);
          }
        });
        break;
      case "3":
        page.innerHTML = "";
        links.forEach((link) => {
          link.classList.remove("active");
        });
        active_link_3.classList.add("active");
        data.forEach((obj, i) => {
          const pattern = `
         <div class="comments">
         <p>${obj.id}</p>
         <h1>${obj.name}</h1>
         <p>${obj.email}</p>
         <p>${obj.body}</p>
         </div>
         `;
          if (i >= 200 && i < 300) {
            page.insertAdjacentHTML("beforeend", pattern);
          }
        });
        break;
      case "4":
        page.innerHTML = "";
        links.forEach((link) => {
          link.classList.remove("active");
        });
        active_link_4.classList.add("active");
        data.forEach((obj, i) => {
          const pattern = `
         <div class="comments">
         <p>${obj.id}</p>
         <h1>${obj.name}</h1>
         <p>${obj.email}</p>
         <p>${obj.body}</p>
         </div>
         `;
          if (i >= 300 && i < 400) {
            page.insertAdjacentHTML("beforeend", pattern);
          }
        });
        break;
      case "5":
        page.innerHTML = "";
        links.forEach((link) => {
          link.classList.remove("active");
        });
        active_link_5.classList.add("active");
        data.forEach((obj, i) => {
          const pattern = `
         <div class="comments">
         <p>${obj.id}</p>
         <h1>${obj.name}</h1>
         <p>${obj.email}</p>
         <p>${obj.body}</p>
         </div>
         `;
          if (i >= 400 && i < 500) {
            page.insertAdjacentHTML("beforeend", pattern);
          }
        });
        break;
    }
  });
}
