const project_list = document.getElementById("project-list");
const html5_logo = document.getElementById("html5-logo");
const css3_logo = document.getElementById("css3-logo");
const js_logo = document.getElementById("js-logo");
const python_logo = document.getElementById("python-logo");

/* Functions */

/* Event Listners */

html5_logo.addEventListener("click", () => {
  project_list.innerHTML = ""; //Removes all the content in the project_list

  let list_item;
  let link;

  for (let i = 0; i < 3; i++) {
    list_item = document.createElement("li");
    link = document.createElement("a");
    link.target = "_blank";

    switch (i) {
      case 0:
        link.href = "https://github.com/jjhenrichs/Doggy-Daycare";
        link.innerHTML = "Doggy Daycare";
        break;
      case 1:
        link.href = "https://github.com/jjhenrichs/tea-cozy";
        link.innerHTML = "Tea Cozy";
        break;
      case 2:
        link.href = "https://github.com/jjhenrichs/portfolio";
        link.innerHTML = "and this Web Portfolio";
        break;
      default:
        break;
    }

    list_item.appendChild(link);
    project_list.appendChild(list_item);
  }
});

python_logo.addEventListener("click", () => {
  project_list.innerHTML = ""; //Removes all the content in the project_list

  let list_item;
  let link;

  for (let i = 0; i < 2; i++) {
    list_item = document.createElement("li");
    link = document.createElement("a");
    link.target = "_blank";

    switch (i) {
      case 0:
        link.href = "https://github.com/jjhenrichs/py_calculator";
        link.innerHTML = "Python Calculator";
        break;
      case 1:
        link.href =
          "https://github.com/jjhenrichs/py_random_password_generator";
        link.innerHTML = "Random Password Genrator";
        break;
      default:
        break;
    }

    list_item.appendChild(link);
    project_list.appendChild(list_item);
  }
});
