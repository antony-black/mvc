import AddressBookView from "../view/AddressBookView";
import Model from "../model/Model";

class AddressBookCtrl {

  addressBookView: AddressBookView;
  constructor(addressBookView: AddressBookView) {
    this.addressBookView = addressBookView;
}
   init() {
      this.addressBookView.init();
  }

  public static getContacts() {
    return Model.contactsData;
  }

  public static getContact(index: number) {
    return Model.contactsData[index];
  } 
}

export default AddressBookCtrl;