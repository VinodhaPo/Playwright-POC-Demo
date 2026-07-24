
class PracticeFormLocators {
  constructor(page){
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.email = page.locator('#userEmail');
    this.femaleGender = page.getByText('Female');
    this.mobile = page.locator('#userNumber');
    this.dob = page.locator('#dateOfBirthInput');
    this.subject = page.locator('#subjectsInput');
    this.reading = page.getByText('Reading');
    this.upload = page.locator('#uploadPicture');
    this.address = page.locator('#currentAddress');
    this.submit = page.locator('#submit');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
  }
}
module.exports={PracticeFormLocators};
