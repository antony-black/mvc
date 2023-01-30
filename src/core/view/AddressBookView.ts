import AddressBookCtrl from "../controller/AddressBookCtrl";
import { EAttribute } from "../../enums/EAttribute";
import { EHtml } from "../../enums/EHtml";
import { EItemPropers } from "../../enums/EItemPropers";
import { EEvents } from "../../enums/EEvents";

class AddressBookView {

  init() {
    this.renderContactListModule();   
  }

  renderContactListModule() {
    const contacts = AddressBookCtrl.getContacts();

    const $contactListUI = document.getElementById(EHtml.CONTACT_LIST)!;

    $contactListUI.innerHTML = '';

    for (let i = 0, len = contacts.length; i < len; i++) {
        let $li = document.createElement(EHtml.LI);

        $li.setAttribute(EAttribute.CLASS, EAttribute.CONTACT_LIST_ITEM);

        $li.setAttribute(EAttribute.DATA_INDEX, i.toString());

        $li.innerHTML = `${contacts[i][EItemPropers.FIRST_NAME]} ${contacts[i][EItemPropers.LAST_NAME]}`;

        $li.addEventListener(EEvents.CLICK, () => {
          this.renderContactDetailsModule(i);
        });

        $contactListUI.append($li);
    }
  }

  renderContactDetailsModule(selectedIndex: number) {
    const selectedItem = AddressBookCtrl.getContact(selectedIndex);

    const $ContactItemUI = document.getElementById(EHtml.CONTACT_ITEM_DETAILS)!;
    
    $ContactItemUI.innerHTML = `
    ${selectedItem[EItemPropers.FIRST_NAME]} 
    <br> 
    ${selectedItem[EItemPropers.LAST_NAME]} 
    <br> 
    ${selectedItem[EItemPropers.PHONE]} 
    <br> 
    ${selectedItem[EItemPropers.EMAIL]}
    `;
  }
}

export default AddressBookView;