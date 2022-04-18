import { LightningElement, api } from 'lwc';

export default class AccountTeamCommissionList extends LightningElement {
  @api
  members = [];

  @api
  error;
}
