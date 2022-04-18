import { LightningElement, api } from 'lwc';
import getTeamMembers from '@salesforce/apex/AccountTeamController.getTeamMembers';

export default class AccountCommissionSplitter extends LightningElement {
  _accountId;
  members = [];

  @api
  set recordId(id) {
    this._accountId = id;
    getTeamMembers({ accountId: id }).then(
      (result) =>
        (this.members = result.map((r) => ({
          id: r.Id,
          role: r.TeamMemberRole,
          userId: r.UserId,
          pct: r.SplitPercentage__c,
          name: r.User.Name
        })))
    );
  }

  get recordId() {
    return this._accountId;
  }

  get 
}
