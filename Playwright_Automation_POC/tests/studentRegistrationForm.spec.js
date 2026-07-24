
const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../pages/PracticeFormPage');
const data = require('../test-data/studentData.json');
const path = require('path');

test('Student Registration', async ({page})=>{
 const form=new PracticeFormPage(page);
 await form.navigate();


 await expect(form.loc.firstName).toBeVisible();
 await expect(form.loc.mobile).toBeVisible();

 try{
   await form.fillForm(data,path.join(__dirname,'../profile.png'));
   await form.submit();
   await expect(form.loc.modalTitle).toHaveText('Thanks for submitting the form');
 }catch(error){
   await page.screenshot({path:'failure.png',fullPage:true});
   throw error;
 }
});
