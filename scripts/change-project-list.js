const project_list = document.getElementById("project-list");
const html5_logo = document.getElementById("html5-logo");
const css3_logo = document.getElementById("css3-logo");
const js_logo = document.getElementById("js-logo");
const python_logo = document.getElementById("python-logo");

let list_item;
let link;

/* Event Listners */

/* HTML5 Event Listeners */

html5_logo.addEventListener("click", () => {
  project_list.innerHTML = ""; //Removes all the content in the project_list

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

/* CSS3 Event Listener */

css3_logo.addEventListener("click", () => {
  project_list.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    list_item = document.createElement("li");
    link = document.createElement("a");
    link.target = "_blank";

    switch (i) {
      case 0:
        link.href = "https://github.com/jjhenrichs/linkedin-loader";
        link.innerHTML = "LinkedIn Loader";
        break;
      case 1:
        link.href = "https://github.com/jjhenrichs/my_wellness_living_loader";
        link.innerHTML = "Wellness Rainbow Loader";
        break;
      case 2:
        link.href = "https://github.com/jjhenrichs/vudu-loader";
        link.innerHTML = "Vudu Loader";
        break;
      case 3:
        link.href = "https://github.com/jjhenrichs/Doggy-Daycare";
        link.innerHTML = "Doggy Daycare";
        break;
      case 4:
        link.href = "https://github.com/jjhenrichs/tea-cozy";
        link.innerHTML = "Tea Cozy";
        break;
      case 5:
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

/* JS Event Listener */

js_logo.addEventListener("click", () => {
  project_list.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    list_item = document.createElement("li");
    link = document.createElement("a");
    link.target = "_blank";

    switch (i) {
      case 0:
        link.href = "https://github.com/jjhenrichs/js-tictactoe";
        link.innerHTML = "Tic-Tac-Toe";
        break;
      case 1:
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

/* Python Event Listener */

python_logo.addEventListener("click", () => {
  project_list.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    list_item = document.createElement("li");
    link = document.createElement("a");
    link.target = "_blank";

    switch (i) {
      case 0:
        link.href = "https://github.com/jjhenrichs/py_calculator";
        link.innerHTML = "Tkinter Calculator";
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
