import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import BirthdayGreeting from '@salesforce/label/c.BirthdayGreeting';

export default class DemoComponent extends LightningElement {
  @api recordId;
  @api fancy;
  @api cardTitle;

  @wire(getRecord, {
    recordId: '$recordId',
    fields: ['Contact.Birthdate']
  })
  theContact;

  get greeting() {
    return BirthdayGreeting;
  }

  get styling() {
    return this.fancy ? 'birthday fancy' : 'birthday';
  }

  get isBirthday() {
    try {
      const today = new Date();
      const birthdate = new Date(this.theContact.data.fields.Birthdate.value);

      return (
        today.getDate() === birthdate.getUTCDate() &&
        today.getMonth() === birthdate.getUTCMonth()
      );
    } catch (e) {
      return false;
    }
  }
}
