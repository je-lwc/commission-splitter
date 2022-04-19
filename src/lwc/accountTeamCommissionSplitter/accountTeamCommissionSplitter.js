import { LightningElement, api } from 'lwc';
import getTeamMembers from '@salesforce/apex/AccountTeamController.getTeamMembers';

function percentageSum(members) {
  console.log(members.reduce((sum, m) => sum + parseInt(m.pct, 10), 0));
  return members.reduce((sum, m) => sum + parseInt(m.pct, 10), 0) === 100;
}

export default class AccountCommissionSplitter extends LightningElement {
  _accountId;
  _members = [];

  @api
  set recordId(id) {
    this._accountId = id;
    getTeamMembers({ accountId: id }).then(
      (result) =>
        (this._members = result.map((r) => ({
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

  get members() {
    return this._members.map((m) => {
      // record level validation would go here
      return m;
    });
  }

  // getter for role groups
  get carpenters() {
    return this.members.filter((m) => m.role === 'Carpenter');
  }

  get plumbers() {
    return this.members.filter((m) => m.role === 'Plumber');
  }

  get fixers() {
    return this.members.filter((m) => m.role === 'Fixer');
  }
  // end getter for role groups

  // getter for role group validations
  get carpentersError() {
    if (percentageSum(this.carpenters) < 100) {
      return 'Total Commission is below 100%';
    }

    if (percentageSum(this.carpenters) > 100) {
      return 'Total Commission is above 100%';
    }
    // further group validation would go here
    return '';
  }

  get plumbersError() {
    if (percentageSum(this.plumbers) < 100) {
      return 'Total Commission is below 100%';
    }

    if (percentageSum(this.plumbers) > 100) {
      return 'Total Commission is above 100%';
    }
    // further group validation would go here
    return '';
  }

  get fixersError() {
    if (percentageSum(this.fixers) < 100) {
      return 'Total Commission is below 100%';
    }

    if (percentageSum(this.fixers) > 100) {
      return 'Total Commission is above 100%';
    }
    // further group validation would go here
    return '';
  }
  // end getter for role group validations

  handleRowChange({ detail: { id, pct } }) {
    this._members = this._members.map((m) => (m.id === id ? { ...m, pct } : m));
  }
}
