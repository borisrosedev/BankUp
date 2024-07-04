import userProfile from "../user-interface/modals/user-profile";
import wallet from "../user-interface/modals/wallet";

export default class ModalService {
  constructor(name) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.innerHTML = "";
    switch (name) {
      case "user-profile":
        modal.innerHTML += userProfile();
        break;
      case "wallet":
        modal.innerHTML += wallet();
        break;
      default:
        break;
    }
  }
}
