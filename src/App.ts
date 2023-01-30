import AddressBookView from "./core/view/AddressBookView";
import AddressBookCtrl from "./core/controller/AddressBookCtrl";

class App {
  private addressBookCtr: AddressBookCtrl;
  private addressBookView: AddressBookView;

constructor() {
    this.addressBookView = new AddressBookView();
    
    this.addressBookCtr = new AddressBookCtrl(this.addressBookView);
  }

  run() {
    this.addressBookCtr.init();
  }
}

export default App;