import HomeContainer from "./src/js/containers/HomeContainer.js";
import LogContainer from "./src/js/containers/LogContainer.js";
import header from "./src/js/user-interface/layout/header.js";
import homePage from "./src/js/user-interface/pages/home-page.js";
import logPage from "./src/js/user-interface/pages/log-page.js";
import notification from "./src/js/user-interface/layout/notification.js";
import { createApp } from "vue";
import notFoundPage from "./src/js/user-interface/pages/not-found-page.js";
import NotFoundContainer from "./src/js/containers/NotFoundContainer.js";
import logoutPage from "./src/js/user-interface/pages/logout-page.js";
import LogoutContainer from "./src/js/containers/LogoutContainer.js";
import DashboardPage from "./src/js/user-interface/pages/DashboardPage.vue";

export function navigateToPage(h) {
  console.log("h", h);
  window.history.pushState({}, "", window.location.pathname + h);
  console.log("🟠 dev says: navigateToPage has been called");
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.innerHTML += header();
  app.innerHTML += notification();
  switch (h) {
    case "":
      app.innerHTML += homePage();
      new HomeContainer(window.onNavigate);
      break;
    case "#register":
      console.log("ici");
      app.innerHTML += logPage(false);
      new LogContainer(window.onNavigate, false);
      break;
    case "#login":
      app.innerHTML += logPage(true);
      new LogContainer(window.onNavigate, true);
      break;
    case "#logout":
      app.innerHTML = "";
      app.innerHTML += notification();
      app.innerHTML += logoutPage();
      new LogoutContainer(window.onNavigate);
      break;
    case "#dashboard":
      app.innerHTML = "";
      const dashboardApp = createApp(DashboardPage);
      dashboardApp.mount("#app");
      break;
    default:
      app.innerHTML = "";
      app.innerHTML += notFoundPage();
      new NotFoundContainer(window.onNavigate);
      break;
  }
}

export default function () {
  console.log("🎾 dev says: router has been called");
  navigateToPage(window.location.hash);
}

window.onNavigate = (h) => {
  navigateToPage(h);
};

window.onpopstate = () => {
  navigateToPage(window.location.hash);
};
