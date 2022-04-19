import { LightningElement, api } from 'lwc';

export default class AccountTeamCommissionList extends LightningElement {
  @api
  members = [];

  @api
  error;

  renderedCallback() {
    const table = this.template.querySelector('.table');
    if (this.error) {
      table.classList.add('error');
    } else {
      table.classList.remove('error');
    }
  }
}
