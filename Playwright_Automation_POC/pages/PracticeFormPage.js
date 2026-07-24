
const { PracticeFormLocators } = require('../locators/PracticeFormLocators');
class PracticeFormPage{
 constructor(page){this.page=page;this.loc=new PracticeFormLocators(page);} 
 async navigate(){await this.page.goto('https://demoqa.com/automation-practice-form');}
 async fillForm(data,image){
 await this.loc.firstName.fill(data.firstName);
 await this.loc.lastName.fill(data.lastName);
 await this.loc.email.fill(data.email);
 await this.loc.femaleGender.click();
 await this.loc.mobile.fill(data.mobile);
 await this.loc.upload.setInputFiles(image);
 await this.loc.address.fill(data.address);
 }
 async submit(){await this.loc.submit.click();}
}
module.exports={PracticeFormPage};
